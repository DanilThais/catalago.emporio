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

  const getBackPath = () => {
    if (location.pathname.includes('/visualizar')) {
      // Se estamos visualizando um catálogo, voltar para a lista de catálogos da categoria
      const categoryParam = new URLSearchParams(location.search).get('category');
      return categoryParam ? `/catalogs/${categoryParam}` : '/';
    } else if (location.pathname.includes('/catalogs/')) {
      // Se estamos na lista de catálogos de uma categoria, voltar para a home
      return '/';
    }
    return '/';
  };

  return (
    <div className="min-h-screen bg-charcoal">
      <header className="px-4 py-4 sm:px-6 md:px-12 md:py-6 flex items-center justify-between bg-charcoal-dark border-b border-cream/10">
        <div className="flex items-center gap-3 sm:gap-4">
          {showBackButton && (
            <Link 
              to={getBackPath()}
              className="text-cream hover:text-gold transition-colors duration-300"
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
      
      <footer className="mt-auto px-4 py-6 sm:px-6 sm:py-8 md:px-12 text-center text-sm text-cream/60 border-t border-cream/10">
        <p>© 2025 Empório Dubai Perfumaria. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;