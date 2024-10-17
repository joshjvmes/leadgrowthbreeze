import React, { useEffect, useState } from 'react';

const scenes = [
  { bg: 'bg-gradient-to-b from-purple-500 to-blue-500', elements: '🧙‍♂️🌟🔮' },
  { bg: 'bg-gradient-to-b from-green-500 to-teal-500', elements: '🧙‍♂️🌳🍄' },
  { bg: 'bg-gradient-to-b from-orange-500 to-red-500', elements: '🧙‍♂️🔥🐉' },
  { bg: 'bg-gradient-to-b from-blue-500 to-indigo-500', elements: '🧙‍♂️☁️🌙' },
];

const WizardSceneBackground = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (isMobile) return;

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
  }, [isMobile]);

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (!isMobile || touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const touchDiff = touchStartY - touchEndY;

    if (Math.abs(touchDiff) > 50) { // Threshold for swipe
      if (touchDiff > 0) {
        // Swipe up
        setCurrentScene((prev) => (prev + 1) % scenes.length);
      } else {
        // Swipe down
        setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
      }
    }
    setTouchStartY(null);
  };

  return (
    <div 
      className={`fixed inset-0 z-[-1] transition-all duration-1000 ease-in-out ${isMobile ? 'h-screen' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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