import React, { useMemo, useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const bubbles = useMemo(() => {
    const bubbleCount = isMobile ? 10 : 20; // Reduce bubbles on mobile
    const minSize = 50;
    const maxSize = 150;
    const minDuration = 5;
    const maxDuration = 15;
    const gridSize = isMobile ? 3 : 4; // Smaller grid on mobile
    const colors = ['#0FCEFD', '#0097FD', '#E51010', '#FFFFFF'];

    const positions = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        positions.push({
          left: `${(i / gridSize) * 100 + (Math.random() * 25 - 12.5)}%`,
          top: `${(j / gridSize) * 100 + (Math.random() * 25 - 12.5)}%`,
        });
      }
    }

    return positions.slice(0, bubbleCount).map((position, index) => ({
      ...position,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * (maxDuration - minDuration) + minDuration,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [isMobile]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0FCEFD] to-[#0097FD] opacity-50"></div>
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            top: bubble.top,
            backgroundColor: bubble.color,
            opacity: 0.3,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;