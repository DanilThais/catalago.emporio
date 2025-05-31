import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';

const FloatingSparkle: React.FC<{ delay: number }> = ({ delay }) => (
  <motion.span
    className="absolute text-3xl text-rose-600/30"
    initial={{ opacity: 0, y: 0 }}
    animate={{ 
      opacity: [0, 1, 0],
      y: -20,
      scale: [1, 1.2, 1]
    }}
    transition={{ 
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeOut"
    }}
  >
    ✨
  </motion.span>
);

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleAccessCatalogs = () => {
    navigate('/categorias');
  };

  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <FloatingSparkle delay={0} />
          <FloatingSparkle delay={1.5} />
          <FloatingSparkle delay={3} />
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 relative"
        >
          <motion.div
            animate={{ 
              background: [
                "linear-gradient(to right, #9f1239, #be123c, #9f1239)",
                "linear-gradient(to right, #be123c, #9f1239, #be123c)",
                "linear-gradient(to right, #9f1239, #be123c, #9f1239)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 opacity-5 blur-3xl rounded-full"
          />
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 relative">
            <span className="absolute -left-8 md:-left-12 top-0 text-4xl md:text-5xl animate-pulse">✨</span>
            <span className="bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600 bg-clip-text text-transparent relative">
              Empório Dubai Perfumaria
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-800/20 via-rose-600/40 to-rose-800/20"
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
            <span className="absolute -right-8 md:-right-12 top-0 text-4xl md:text-5xl animate-pulse delay-75">✨</span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Seja bem-vindo(a) aos nossos{' '}
            <span className="font-serif italic bg-gradient-to-r from-rose-800 to-rose-600 bg-clip-text text-transparent">
              catálogos mágicos
            </span>{' '}
            — onde cada fragrância conta uma história única e desperta sentidos inesquecíveis.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-20"
        >
          <Button 
            size="lg" 
            onClick={handleAccessCatalogs}
            className="font-serif text-xl px-16 py-6 relative group hover:shadow-xl hover:shadow-rose-900/10 transition-shadow duration-300"
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-rose-800 via-rose-700 to-rose-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">Explorar Catálogos</span>
            <motion.span 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
              animate={{ 
                x: [0, 5, 0],
                opacity: [1, 0.5, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              ✨
            </motion.span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="relative max-w-5xl mx-auto group"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-rose-800/10 to-rose-800/20 rounded-2xl backdrop-blur-sm"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />
          <img 
            src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg" 
            alt="Coleção luxuosa de perfumes em ambiente sofisticado" 
            className="w-full h-auto rounded-2xl shadow-2xl shadow-rose-900/10 transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <motion.div 
            className="absolute inset-0 rounded-2xl ring-1 ring-rose-800/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default HomePage;