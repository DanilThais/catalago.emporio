import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.img
        src="logo-emporio-dubai.png"
        alt="Empório Dubai Perfumaria"
        className="h-8 sm:h-10 w-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Logo;