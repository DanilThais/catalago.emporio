import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { catalogs } from '../data/catalogs';
import { FileText } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-4">
            Catálogos Disponíveis
          </h1>
          <motion.div
            className="w-24 h-0.5 bg-rose-800/20 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-rose-800" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-serif font-bold text-rose-800 mb-2">
                      {catalog.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {catalog.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(catalog.pdfUrl, '_blank')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-rose-800 text-white rounded-lg hover:bg-rose-700 transition-colors duration-300"
                    >
                      <span>Visualizar</span>
                      <FileText className="w-4 h-4" />
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