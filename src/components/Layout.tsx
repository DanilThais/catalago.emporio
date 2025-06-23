import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeftCircle, LogOut, ShoppingCart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const showBackButton = location.pathname !== '/' && location.pathname !== '/pedidos';

  const getBackPath = () => {
    if (location.pathname.includes('/visualizar')) {
      // Se estamos visualizando um catálogo, voltar para a lista de catálogos da categoria
      const categoryParam = new URLSearchParams(location.search).get('category');
      return categoryParam ? `/catalogs/${categoryParam}` : '/';
    } else if (location.pathname.includes('/catalogs/')) {
      // Se estamos na lista de catálogos de uma categoria, voltar para a home
      return '/';
    } else if (location.pathname.includes('/pedidos/')) {
      // Se estamos em uma página de pedidos, voltar para a lista de pedidos
      return '/pedidos';
    }
    return '/';
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="px-4 py-4 sm:px-6 md:px-12 md:py-6 flex items-center justify-between bg-deep-brown-dark">
        <div className="flex items-center gap-3 sm:gap-4">
          {showBackButton && (
            <Link 
              to={getBackPath()}
              className="text-rose hover:text-rose-light transition-colors duration-300"
              aria-label="Voltar"
            >
              <ArrowLeftCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
          )}
          <Link to="/" className="block">
            <Logo />
          </Link>
        </div>
        
        {user && (
          <div className="flex items-center gap-3">
            <Link 
              to="/pedidos"
              className="text-rose hover:text-rose-light transition-colors duration-300 flex items-center gap-2"
              title="Meus Pedidos"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Pedidos</span>
            </Link>
            <button
              onClick={handleSignOut}
              className="text-rose hover:text-rose-light transition-colors duration-300 flex items-center gap-2"
              title="Sair"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        )}
      </header>
      
      <main className="px-4 py-4 sm:px-6 md:px-12 md:py-6 max-w-7xl mx-auto">
        {children}
      </main>
      
      <footer className="mt-auto px-4 py-6 sm:px-6 sm:py-8 md:px-12 text-center text-sm text-rose/80">
        <p>© 2025 Empório Dubai Perfumaria. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;