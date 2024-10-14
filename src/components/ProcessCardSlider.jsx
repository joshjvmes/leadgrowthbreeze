import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProcessCard = ({ title, content, backgroundColor, titleColor }) => (
  <div 
    className="w-full max-w-sm mx-auto h-64 flex flex-col justify-between rounded-lg overflow-hidden"
    style={{
      background: `linear-gradient(139deg, #F5F9FF 15.36%, #FFF 85.76%)`,
      border: `4px solid #FFF`,
      backgroundColor: backgroundColor
    }}
  >
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4" style={{ color: titleColor }}>{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  </div>
);

const ProcessCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "Understand",
      content: "We analyze your current marketing strategies and identify areas for improvement.",
      backgroundColor: "#D8EFF7",
      titleColor: "#019AFD"
    },
    {
      title: "Strategize",
      content: "Our team develops a customized AI-driven marketing plan tailored to your business goals.",
      backgroundColor: "#FFE6EC",
      titleColor: "#FF5F7A"
    },
    {
      title: "Implement",
      content: "We execute the strategy using cutting-edge AI tools and monitor performance in real-time.",
      backgroundColor: "#FEEECC",
      titleColor: "#FFBB46"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative py-12">
      <div className="flex justify-center items-center space-x-6">
        <Button 
          onClick={prevSlide} 
          className="bg-white text-gray-800 hover:bg-gray-100"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex space-x-6 overflow-hidden w-[calc(2*24rem+1.5rem)] relative">
          <div 
            className="absolute inset-0 bg-[#D8EFF7] rounded-lg" 
            style={{ 
              left: '-40px', 
              right: '-40px', 
              top: '-40px', 
              bottom: '-40px', 
              zIndex: -1 
            }}
          ></div>
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-96 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(${-100 * currentIndex}%)`,
              }}
            >
              <ProcessCard {...card} />
            </div>
          ))}
        </div>
        <Button 
          onClick={nextSlide} 
          className="bg-white text-gray-800 hover:bg-gray-100"
          disabled={currentIndex === cards.length - 2}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProcessCardSlider;