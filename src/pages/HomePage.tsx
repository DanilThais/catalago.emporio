import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SEOHead from '../components/SEOHead';
import { categories } from '../data/categories';
import { Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <SEOHead 
        title="Empório Dubai Perfumaria - Catálogos Digitais"
        description="Explore nossa coleção exclusiva de perfumes Lattafa, Maison Alhambra e muito mais. Catálogos digitais da Empório Dubai Perfumaria."
      />
      
      <div className="min-h-screen py-8 px-4 sm:py-12 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brown-dark mb-4">
            Catálogos Disponíveis
          </h1>
          <motion.div
            className="w-24 h-0.5 bg-golden-dark/30 mx-auto mb-4"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="text-brown-dark/70 text-lg font-medium">
            Explore nossa coleção de perfumes e produtos de beleza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <Link to={`/catalogs/${category.id}`}>
                <motion.div 
                  className="overflow-hidden rounded-xl shadow-golden hover:shadow-lg transition-all duration-500 bg-white border border-golden/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                      loading="lazy"
                    />
                    <motion.div 
                      className="absolute inset-0"
                      initial={{ 
                        background: "linear-gradient(to top, rgba(139, 69, 19, 0.8), rgba(139, 69, 19, 0.3) 50%, rgba(139, 69, 19, 0) 100%)" 
                      }}
                      whileHover={{ 
                        background: "linear-gradient(to top, rgba(139, 69, 19, 0.9), rgba(139, 69, 19, 0.5) 50%, rgba(139, 69, 19, 0.1) 100%)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"
                      initial={{ y: 0 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <motion.h2 
                        className="text-xl sm:text-2xl font-display font-bold text-golden-cream mb-2 flex items-center gap-2"
                        initial={{ opacity: 0.9 }}
                        whileHover={{ opacity: 1, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sparkles className="w-5 h-5" />
                        {category.name}
                      </motion.h2>
                      <motion.p 
                        className="text-sm text-golden-cream/90 leading-relaxed font-medium"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.description}
                      </motion.p>
                      <motion.div
                        className="w-12 h-0.5 bg-golden-cream/30 mt-3"
                        whileHover={{ width: "100%", backgroundColor: "rgba(247, 243, 233, 0.5)" }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 p-6 bg-white rounded-xl border border-golden/20 shadow-golden"
        >
          <p className="text-brown-dark/80 text-sm">
            <span className="font-semibold text-brown-dark">Mais catálogos em breve!</span> 
            <br />
            <span className="font-medium">Estamos constantemente expandindo nossa coleção com mais de 10 novos catálogos planejados.</span>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default HomePage;