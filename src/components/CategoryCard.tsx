import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group w-full"
    >
      <Link to={`/categoria/${category.id}`}>
        <motion.div 
          className="overflow-hidden rounded-lg shadow-cream hover:shadow-gold transition-all duration-500"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            />
            <motion.div 
              className="absolute inset-0"
              initial={{ 
                background: "linear-gradient(to top, rgba(55, 55, 55, 0.95), rgba(55, 55, 55, 0.3) 50%, rgba(55, 55, 55, 0) 100%)" 
              }}
              whileHover={{ 
                background: "linear-gradient(to top, rgba(55, 55, 55, 0.98), rgba(55, 55, 55, 0.5) 50%, rgba(55, 55, 55, 0.1) 100%)"
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"
              initial={{ y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-display font-bold text-charcoal mb-2"
                initial={{ opacity: 0.9 }}
                whileHover={{ opacity: 1, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {category.name}
              </motion.h3>
              <motion.p 
                className="text-sm text-charcoal/90 leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {category.description}
              </motion.p>
              <motion.div
                className="w-12 h-0.5 bg-charcoal/30 mt-3"
                whileHover={{ width: "100%", backgroundColor: "rgba(55, 55, 55, 0.5)" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;