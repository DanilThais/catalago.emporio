import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { catalogs } from '../data/catalogs';
import { FileText } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-8 px-4 sm:py-12 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gold mb-4">
            Catálogos Disponíveis
          </h1>
          <motion.div
            className="w-24 h-0.5 bg-gold/20 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-brown-light rounded-xl shadow-gold hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="flex-shrink-0 w-16 h-16 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-8 h-8 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div className="flex-grow w-full sm:w-auto">
                    <h2 className="text-2xl sm:text-xl font-display font-bold text-gold mb-2">
                      {catalog.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-2 text-base sm:text-sm">
                      {catalog.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(catalog.pdfUrl, '_blank')}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-4 sm:py-2 bg-gold text-brown rounded-lg hover:bg-gold-light transition-colors duration-300 text-lg sm:text-base"
                    >
                      <span>Visualizar Catálogo</span>
                      <FileText className="w-5 h-5 sm:w-4 sm:h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;