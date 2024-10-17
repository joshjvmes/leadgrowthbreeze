import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import WizardContentCard from '../components/WizardContentCard';
import WizardHatPopup from '../components/WizardHatPopup';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const scenes = [
  { bg: 'bg-gradient-to-b from-purple-500 to-blue-500', elements: '🧙‍♂️🌟🔮', title: 'Magical Beginnings' },
  { bg: 'bg-gradient-to-b from-green-500 to-teal-500', elements: '🧙‍♂️🌳🍄', title: 'Enchanted Forest' },
  { bg: 'bg-gradient-to-b from-orange-500 to-red-500', elements: '🧙‍♂️🔥🐉', title: "Dragon's Lair" },
  { bg: 'bg-gradient-to-b from-blue-500 to-indigo-500', elements: '🧙‍♂️☁️🌙', title: 'Celestial Realm' },
];

const Index = () => {
  const [currentScene, setCurrentScene] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollPercentage = scrollPosition / (docHeight - windowHeight);
    const newScene = Math.min(Math.floor(scrollPercentage * scenes.length), scenes.length - 1);
    
    if (newScene !== currentScene) {
      setCurrentScene(newScene);
    }
  }, [currentScene]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="relative">
      <main>
        {scenes.map((scene, index) => (
          <WizardContentCard
            key={index}
            title={scene.title}
            content={getContentForScene(index)}
            bg={scene.bg}
            elements={scene.elements}
          />
        ))}

        <section className="min-h-screen flex items-center justify-center bg-white bg-opacity-80 p-4 sm:p-8">
          <div className="max-w-2xl text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center font-poppins small-caps gradient-text"
            >
              Unlock Your Potential
            </motion.h3>
            <WizardHatPopup />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact" className="mt-6 sm:mt-8 inline-block">
                <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

const getContentForScene = (index) => {
  const contents = [
    "Welcome to Rocket Now, where AI-powered marketing meets relentless dedication to your growth. We're not just another agency – we offer the highest level of service in the industry.",
    "Your marketing deserves a breakthrough, not just an average return. Rocket Now brings cutting-edge digital strategies that translate directly into business growth.",
    "Need ROI? Book out your sales team? With our multi-channel attribution and customer-first approach, we ensure you get the best return on every marketing dollar.",
    "Ready to leave your competitors behind? Let's turn your marketing into a revenue-generating machine. Contact Rocket Now for a customized strategy consultation."
  ];
  return contents[index] || "Discover the magic of Rocket Now's AI-powered marketing solutions.";
};

export default Index;