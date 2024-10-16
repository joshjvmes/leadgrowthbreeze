import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    title: "On-boarding + GTM Strategy",
    content: "We align our strategy with your business goals and integrate with your tech stack.",
    backgroundColor: "#D8EFF7",
    titleColor: "#019AFD"
  },
  {
    title: "Social Conversation Monitoring",
    content: "We monitor industry shifts and conversations to identify potential leads.",
    backgroundColor: "#FFE6EC",
    titleColor: "#FF5F7A"
  },
  {
    title: "Lead Discovery & Enrichment",
    content: "We use AI and multiple tools to find and enrich high-quality leads.",
    backgroundColor: "#FEEECC",
    titleColor: "#FFBB46"
  },
  {
    title: "Message Crafting + Outreach",
    content: "We create personalized messages addressing specific customer problems.",
    backgroundColor: "#E6F7FF",
    titleColor: "#0097FD"
  },
  {
    title: "Guiding Customer Decisions",
    content: "We nurture leads with targeted information to support their decision-making.",
    backgroundColor: "#FFE6EC",
    titleColor: "#E51010"
  },
  {
    title: "Arming Sales Reps",
    content: "We provide key insights to your sales team for successful conversations.",
    backgroundColor: "#D8EFF7",
    titleColor: "#019AFD"
  }
];

const ProcessCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % processSteps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <div className="relative w-full overflow-hidden py-16">
      <div className="flex items-center justify-center">
        <Button onClick={prevSlide} className="mr-4 bg-[#E51010] text-white hover:bg-[#B30000]">
          <ChevronLeft size={24} />
        </Button>
        <div className="flex items-center space-x-4 overflow-x-hidden">
          {[-1, 0, 1].map((offset) => {
            const index = (currentIndex + offset + processSteps.length) % processSteps.length;
            const step = processSteps[index];
            const isCenter = offset === 0;

            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center ${isCenter ? 'w-80' : 'w-64'} transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: isCenter ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`rounded-lg p-6 ${isCenter ? 'h-64 w-80' : 'h-48 w-64'}`}
                  style={{ backgroundColor: step.backgroundColor }}
                >
                  <h3 className={`font-bold mb-2 text-center ${isCenter ? 'text-xl' : 'text-lg'}`} style={{ color: step.titleColor }}>{step.title}</h3>
                  {isCenter && (
                    <p className="text-sm text-center text-gray-600">{step.content}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        <Button onClick={nextSlide} className="ml-4 bg-[#E51010] text-white hover:bg-[#B30000]">
          <ChevronRight size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ProcessCardSlider;