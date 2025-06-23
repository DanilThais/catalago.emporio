import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import CatalogListPage from './pages/CatalogListPage';
import PDFViewerPage from './pages/PDFViewerPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OrdersPage from './pages/OrdersPage';
import CreateOrderPage from './pages/CreateOrderPage';

// Components
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';

// Contexts
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <AnimatePresence mode="wait">
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalogs/:categoryId" element={<CatalogListPage />} />
                <Route path="/visualizar/:catalogId" element={<PDFViewerPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route 
                  path="/pedidos" 
                  element={
                    <ProtectedRoute>
                      <OrdersPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/pedidos/novo" 
                  element={
                    <ProtectedRoute>
                      <CreateOrderPage />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Layout>
          </AnimatePresence>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;