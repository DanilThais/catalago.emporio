import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Catalog } from '../types';

interface CatalogCardProps {
  catalog: Catalog;
  index: number;
}

const CatalogCard: React.FC<CatalogCardProps> = ({ catalog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/visualizar/${catalog.id}?category=${catalog.categoryId}`}>
        <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 overflow-hidden">
            <img
              src={catalog.thumbnailUrl}
              alt={catalog.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-rose-800 mb-1">{catalog.title}</h3>
            <p className="text-sm text-gray-600">{catalog.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CatalogCard;