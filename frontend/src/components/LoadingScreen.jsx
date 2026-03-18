import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-purple-900 to-gray-950">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="ml-4"
      >
        <motion.span
          animate={{ letterSpacing: '10px' }}
          transition={{ duration: 1.5 }}
          className="text-2xl font-bold gradient-text"
        >
          SHAAN
        </motion.span>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
