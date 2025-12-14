'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <motion.div
        className="loading-spinner__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="loading-spinner__spinner">
          <motion.div
            className="loading-spinner__circle"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        <p className="loading-spinner__text">Загрузка...</p>
      </motion.div>
    </div>
  );
}