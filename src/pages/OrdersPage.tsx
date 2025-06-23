import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Package, Calendar, Filter, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { useOrders } from '../hooks/useOrders';
import { useAuth } from '../contexts/AuthContext';
import { Order } from '../types/orders';

const OrdersPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'week'>('week');
  const { orders, loading, getWeeklyOrders } = useOrders();
  const { saleswoman } = useAuth();

  const displayOrders = filter === 'week' ? getWeeklyOrders() : orders;

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'confirmed': return 'Confirmado';
      case 'delivered': return 'Entregue';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  const totalWeeklyAmount = getWeeklyOrders().reduce((sum, order) => sum + order.total_amount, 0);
  const weeklyOrdersCount = getWeeklyOrders().length;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner text="Carregando pedidos..." />
      </div>
    );
  }

  return (
    <PageTransition>
      <SEOHead 
        title="Meus Pedidos - Empório Dubai"
        description="Gerencie seus pedidos da Empório Dubai Perfumaria"
      />
      
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-display font-bold text-rose">
              Meus Pedidos
            </h1>
            <p className="text-gray-600 mt-1">
              Olá, {saleswoman?.name}! Gerencie seus pedidos aqui.
            </p>
          </div>
          
          <Link to="/pedidos/novo">
            <Button variant="primary" className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Novo Pedido
            </Button>
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-rose border border-rose/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-rose/10 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-rose" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pedidos esta semana</p>
                <p className="text-2xl font-bold text-gray-900">{weeklyOrdersCount}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-rose border border-rose/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total da semana</p>
                <p className="text-2xl font-bold text-gray-900">
                  R$ {totalWeeklyAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-rose border border-rose/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total de pedidos</p>
                <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-6"
        >
          <Filter className="w-5 h-5 text-gray-600" />
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('week')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'week'
                  ? 'bg-rose text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Esta semana
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-rose text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
          </div>
        </motion.div>

        {/* Orders List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {displayOrders.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-rose border border-rose/10">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {filter === 'week' ? 'Nenhum pedido esta semana' : 'Nenhum pedido encontrado'}
              </h3>
              <p className="text-gray-600 mb-6">
                {filter === 'week' 
                  ? 'Você ainda não fez nenhum pedido esta semana.'
                  : 'Você ainda não fez nenhum pedido.'
                }
              </p>
              <Link to="/pedidos/novo">
                <Button variant="primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Criar primeiro pedido
                </Button>
              </Link>
            </div>
          ) : (
            displayOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-rose border border-rose/10 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Pedido #{order.id.slice(-8)}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                    
                    {order.customer_name && (
                      <p className="text-sm text-gray-600 mb-1">
                        Cliente: {order.customer_name}
                      </p>
                    )}
                    
                    <p className="text-sm text-gray-600 mb-2">
                      Data: {new Date(order.order_date).toLocaleDateString('pt-BR')}
                    </p>
                    
                    <p className="text-sm text-gray-600">
                      {order.items?.length || 0} item(s)
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-bold text-rose">
                      R$ {order.total_amount.toFixed(2)}
                    </p>
                    <Link 
                      to={`/pedidos/${order.id}`}
                      className="text-sm text-rose hover:text-rose-dark font-medium"
                    >
                      Ver detalhes →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default OrdersPage;