import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProcessCard = ({ title, content, backgroundColor, titleColor }) => (
  <div className="w-full max-w-sm mx-auto">
    <div 
      className="rounded-lg p-6 shadow-lg" 
      style={{
        background: `linear-gradient(139deg, #F5F9FF 15.36%, #FFF 85.76%)`,
        border: `4px solid #FFF`,
        backgroundColor: backgroundColor
      }}
    >
      <h3 className="text-xl font-bold mb-4" style={{ color: titleColor }}>{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  </div>
);

const ProcessCardSlider = () => {
  const cards = [
    {
      title: "Discover",
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

  return (
    <div className="relative py-12">
      <div className="flex overflow-x-auto space-x-6 py-4 px-4 scrollbar-hide">
        {cards.map((card, index) => (
          <ProcessCard key={index} {...card} />
        ))}
      </div>
      <Button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-100">
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 hover:bg-gray-100">
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ProcessCardSlider;