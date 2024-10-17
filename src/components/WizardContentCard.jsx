import React from 'react';
import { motion } from 'framer-motion';

const WizardContentCard = ({ title, content, bg, elements }) => {
  return (
    <motion.div
      className={`min-h-screen flex items-center justify-center p-8 ${bg}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white bg-opacity-80 rounded-lg shadow-xl p-8 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
        <p className="text-xl mb-6">{content}</p>
        <div className="text-center">{elements}</div>
      </div>
    </motion.div>
  );
};

export default WizardContentCard;