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
    <div className="min-h-screen bg-deep-brown-light">
      <header className="px-4 py-4 sm:px-6 md:px-12 md:py-6 flex items-center justify-between bg-deep-brown-dark">
        <div className="flex items-center gap-3 sm:gap-4">
          {showBackButton && (
            <Link 
              to={location.pathname.includes('/visualizar') 
                ? `/categoria/${new URLSearchParams(location.search).get('category')}` 
                : location.pathname.includes('/categoria/') 
                  ? '/categorias' 
                  : '/'
              }
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