import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <header className="px-6 py-4 md:px-12 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <Link 
              to={location.pathname.includes('/visualizar') 
                ? `/categoria/${new URLSearchParams(location.search).get('category')}` 
                : location.pathname.includes('/categoria/') 
                  ? '/categorias' 
                  : '/'
              }
              className="text-rose-800 hover:text-rose-600 transition-colors duration-300"
              aria-label="Voltar"
            >
              <ArrowLeftCircle size={28} />
            </Link>
          )}
          <Link to="/" className="block">
            <Logo />
          </Link>
        </div>
      </header>
      
      <main className="px-6 py-4 md:px-12 md:py-6 max-w-7xl mx-auto">
        {children}
      </main>
      
      <footer className="mt-auto px-6 py-8 md:px-12 text-center text-sm text-rose-800">
        <p>© 2025 Perfumaria da Thais. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;