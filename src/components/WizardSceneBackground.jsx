import React, { useEffect, useState } from 'react';

const scenes = [
  { bg: 'bg-gradient-to-b from-purple-500 to-blue-500', elements: '🧙‍♂️🌟🔮' },
  { bg: 'bg-gradient-to-b from-green-500 to-teal-500', elements: '🧙‍♂️🌳🍄' },
  { bg: 'bg-gradient-to-b from-orange-500 to-red-500', elements: '🧙‍♂️🔥🐉' },
  { bg: 'bg-gradient-to-b from-blue-500 to-indigo-500', elements: '🧙‍♂️☁️🌙' },
];

const WizardSceneBackground = () => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] transition-all duration-1000 ease-in-out">
      <div className={`absolute inset-0 ${scenes[currentScene].bg}`}></div>
      <div className="absolute inset-0 flex items-center justify-center text-8xl animate-float">
        {scenes[currentScene].elements}
      </div>
    </div>
  );
};

export default WizardSceneBackground;