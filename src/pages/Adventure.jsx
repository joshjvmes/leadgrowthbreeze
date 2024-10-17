import React from 'react';
import { motion } from 'framer-motion';
import { scenes } from '../components/WizardSceneBackground';

const AdventureCard = ({ bg, elements, title }) => (
  <motion.div 
    className={`${bg} rounded-lg shadow-xl p-6 m-4 w-64 h-64 flex flex-col items-center justify-center text-white`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-6xl mb-4">{elements}</div>
    <h3 className="text-xl font-bold text-center">{title}</h3>
  </motion.div>
);

const Adventure = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#0097FD]">Wizard's Adventure</h1>
      <div className="flex flex-wrap justify-center">
        {scenes.map((scene, index) => (
          <AdventureCard key={index} {...scene} />
        ))}
      </div>
    </div>
  );
};

export default Adventure;