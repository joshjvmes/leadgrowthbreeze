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
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4" style={{ color: titleColor }}>{title}</h3>
      <p className="text-sm sm:text-base text-gray-700">{content}</p>
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
    <div className="relative py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Button 
          onClick={prevSlide} 
          className="bg-white text-gray-800 hover:bg-gray-100 w-full sm:w-auto"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 overflow-hidden w-full sm:w-[calc(2*24rem+1.5rem)]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`w-full sm:w-96 transition-transform duration-300 ease-in-out ${
                index === currentIndex ? 'block' : 'hidden sm:block'
              }`}
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
          className="bg-white text-gray-800 hover:bg-gray-100 w-full sm:w-auto"
          disabled={currentIndex === cards.length - 1}
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ProcessCardSlider;