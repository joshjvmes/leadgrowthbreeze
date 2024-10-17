import React, { useEffect, useState } from 'react';

export const scenes = [
  { bg: 'bg-gradient-to-b from-purple-500 to-blue-500', elements: '🧙‍♂️🌟🔮', title: 'Magical Beginnings' },
  { bg: 'bg-gradient-to-b from-green-500 to-teal-500', elements: '🧙‍♂️🌳🍄', title: 'Enchanted Forest' },
  { bg: 'bg-gradient-to-b from-orange-500 to-red-500', elements: '🧙‍♂️🔥🐉', title: 'Dragon's Lair' },
  { bg: 'bg-gradient-to-b from-blue-500 to-indigo-500', elements: '🧙‍♂️☁️🌙', title: 'Celestial Realm' },
];

const WizardSceneBackground = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / pageHeight;
      const sceneIndex = Math.min(
        Math.floor(scrollPercentage * scenes.length),
        scenes.length - 1
      );
      setCurrentScene(sceneIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-[-1] transition-all duration-1000 ease-in-out ${isMobile ? 'h-screen' : ''}`}>
      <div className={`absolute inset-0 ${scenes[currentScene].bg}`}></div>
      <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl animate-float">
        {scenes[currentScene].elements}
      </div>
      {isMobile && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {scenes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === currentScene ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WizardSceneBackground;