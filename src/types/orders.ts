export interface Product {
  id: string;
  name: string;
  code?: string;
  price: number;
  category: string;
  description?: string;
}

export interface Saleswoman {
  id: string;
  user_id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface OrderItem {
  id: string;
  product_id: string;
  product?: Product;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface Order {
  id: string;
  saleswoman_id: string;
  saleswoman?: Saleswoman;
  order_date: string;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  total_amount: number;
  customer_name?: string;
  customer_phone?: string;
  notes?: string;
  items?: OrderItem[];
  created_at: string;
  updated_at: string;
}

export interface CreateOrderItem {
  product_id: string;
  quantity: number;
  unit_price: number;
}

export interface CreateOrder {
  customer_name?: string;
  customer_phone?: string;
  notes?: string;
  items: CreateOrderItem[];
}