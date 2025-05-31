import React from 'react';
import PageTransition from '../components/PageTransition';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';
import { motion } from 'framer-motion';

const CategoriesPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-4">
            Nossos Catálogos
          </h1>
          <motion.div
            className="w-24 h-0.5 bg-rose-800/20 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.id} 
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default CategoriesPage;