import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import CatalogCard from '../components/CatalogCard';
import SEOHead from '../components/SEOHead';
import { categories } from '../data/categories';
import { catalogs } from '../data/catalogs';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const CatalogListPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = useMemo(() => {
    return categories.find(cat => cat.id === categoryId);
  }, [categoryId]);
  
  const categoryCatalogs = useMemo(() => {
    return catalogs.filter(catalog => catalog.categoryId === categoryId);
  }, [categoryId]);

  if (!category) {
    return (
      <PageTransition>
        <SEOHead title="Categoria não encontrada - Empório Dubai" />
        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold text-rose">Categoria não encontrada</h2>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEOHead 
        title={`${category.name} - Catálogos Empório Dubai`}
        description={`${category.description}. Explore nossa coleção de perfumes ${category.name}.`}
        keywords={`${category.name}, perfumes, fragrâncias, catálogo`}
      />
      
      <div className="py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-rose" />
            <h1 className="text-3xl md:text-4xl font-display font-bold text-rose">
              {category.name}
            </h1>
          </div>
          <motion.div
            className="w-24 h-0.5 bg-rose/20 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
        </motion.div>
        
        {categoryCatalogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryCatalogs.map((catalog, index) => (
              <CatalogCard 
                key={catalog.id} 
                catalog={catalog}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center py-12"
          >
            <div className="bg-rose/5 rounded-xl p-8 border border-rose/10 max-w-md mx-auto">
              <Sparkles className="w-12 h-12 text-rose/50 mx-auto mb-4" />
              <p className="text-lg text-gray-700 mb-2">
                Catálogos em preparação
              </p>
              <p className="text-sm text-gray-600">
                Novos catálogos para esta categoria serão adicionados em breve.
              </p>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 p-6 bg-rose/5 rounded-xl border border-rose/10"
        >
          <p className="text-gray-600 text-sm">
            <span className="font-semibold text-rose">Expandindo constantemente!</span> 
            <br />
            Mais catálogos de {category.name} e outras categorias serão adicionados regularmente.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default CatalogListPage;