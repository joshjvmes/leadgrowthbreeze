import React, { useMemo } from 'react';

const AnimatedBackground = () => {
  const bubbles = useMemo(() => {
    const bubbleCount = 20;
    const minSize = 50;
    const maxSize = 150;
    const minDuration = 5;
    const maxDuration = 15;
    const gridSize = 4; // 4x4 grid
    const colors = ['#E51010', '#B30000', '#FFFFFF', '#FFE6E6']; // Updated colors

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
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E51010] to-[#B30000] opacity-50"></div>
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