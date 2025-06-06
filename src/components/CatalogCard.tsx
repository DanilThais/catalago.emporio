import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
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
      className="group w-full"
    >
      <Link to={`/visualizar/${catalog.id}?category=${catalog.categoryId}`}>
        <div className="overflow-hidden rounded-lg bg-white shadow-rose hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="relative h-40 sm:h-48 overflow-hidden">
            <img
              src={catalog.thumbnailUrl}
              alt={catalog.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown-dark/80 to-transparent" />
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-rose/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-rose" />
              </div>
              <h3 className="text-xl font-display font-bold text-rose">{catalog.title}</h3>
            </div>
            <p className="text-gray-700 text-sm mb-4">{catalog.description}</p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-4 py-2 bg-rose text-white rounded-lg hover:bg-rose-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <span>Visualizar</span>
              <FileText className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CatalogCard;