import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
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
        <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-rose" />
      </motion.div>
      <div className="relative">
        <div className="font-display text-xl sm:text-2xl font-bold text-rose">
          Empório Dubai
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose to-rose-light"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default Logo;