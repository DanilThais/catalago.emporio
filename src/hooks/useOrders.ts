import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Order, CreateOrder } from '../types/orders';
import { useAuth } from '../contexts/AuthContext';

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { saleswoman } = useAuth();

  const fetchOrders = async () => {
    if (!saleswoman) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            *,
            products (*)
          )
        `)
        .eq('saleswoman_id', saleswoman.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const ordersWithItems = data?.map(order => ({
        ...order,
        items: order.order_items?.map(item => ({
          ...item,
          product: item.products
        }))
      })) || [];

      setOrders(ordersWithItems);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar pedidos');
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async (orderData: CreateOrder) => {
    if (!saleswoman) throw new Error('Vendedora não encontrada');

    try {
      // Calculate total amount
      const totalAmount = orderData.items.reduce(
        (sum, item) => sum + (item.quantity * item.unit_price),
        0
      );

      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          saleswoman_id: saleswoman.id,
          total_amount: totalAmount,
          customer_name: orderData.customer_name,
          customer_phone: orderData.customer_phone,
          notes: orderData.notes,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = orderData.items.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        quantity: item.quantity,
        unit_price: item.unit_price,
        total_price: item.quantity * item.unit_price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Refresh orders
      await fetchOrders();

      return { success: true, orderId: order.id };
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Erro ao criar pedido');
    }
  };

  const updateOrderStatus = async (orderId: string, status: Order['status']) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', orderId);

      if (error) throw error;

      // Refresh orders
      await fetchOrders();
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Erro ao atualizar pedido');
    }
  };

  const getWeeklyOrders = () => {
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    startOfWeek.setHours(0, 0, 0, 0);

    return orders.filter(order => {
      const orderDate = new Date(order.order_date);
      return orderDate >= startOfWeek;
    });
  };

  useEffect(() => {
    if (saleswoman) {
      fetchOrders();
    }
  }, [saleswoman]);

  return {
    orders,
    loading,
    error,
    createOrder,
    updateOrderStatus,
    getWeeklyOrders,
    refetch: fetchOrders,
  };
};