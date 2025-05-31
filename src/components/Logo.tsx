import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center gap-3 group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div 
        className="relative"
        animate={{ 
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <span className="text-2xl">✨</span>
        <motion.span 
          className="absolute -top-1 left-0 text-2xl opacity-0"
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
            y: -10
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeOut" 
          }}
        >
          ✨
        </motion.span>
      </motion.div>
      <div className="relative">
        <div className="font-serif text-2xl font-bold bg-gradient-to-r from-rose-800 via-rose-700 to-rose-600 bg-clip-text text-transparent">
          Empório Dubai Perfumaria
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-800 to-rose-600"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default Logo;