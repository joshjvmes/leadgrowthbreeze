import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI-Powered Analytics",
    image: "/feature-analytics.jpg",
    description: "Harness the power of AI to gain deep insights into your marketing campaigns and customer behavior."
  },
  {
    title: "Multi-Channel Integration",
    image: "/feature-integration.jpg",
    description: "Seamlessly integrate and manage all your marketing channels from a single, intuitive dashboard."
  },
  {
    title: "Personalized Campaigns",
    image: "/feature-personalization.jpg",
    description: "Create highly targeted, personalized campaigns that resonate with your audience and drive conversions."
  },
  {
    title: "Real-Time Optimization",
    image: "/feature-optimization.jpg",
    description: "Automatically optimize your campaigns in real-time for maximum ROI and performance."
  },
  {
    title: "Advanced Reporting",
    image: "/feature-reporting.jpg",
    description: "Generate comprehensive reports with actionable insights to guide your marketing strategy."
  }
];

const BusinessFeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  return (
    <div className="relative w-full overflow-hidden py-16">
      <div className="flex items-center justify-center">
        <Button onClick={prevSlide} className="mr-4 bg-[#E51010] text-white hover:bg-[#B30000]">
          <ChevronLeft size={24} />
        </Button>
        <div className="flex items-center space-x-4 overflow-x-hidden">
          {[-1, 0, 1].map((offset) => {
            const index = (currentIndex + offset + features.length) % features.length;
            const feature = features[index];
            const isCenter = offset === 0;

            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center ${isCenter ? 'w-80' : 'w-64'} transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: isCenter ? 1 : 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`rounded-lg object-cover mb-4 ${isCenter ? 'h-64 w-80' : 'h-48 w-64'}`}
                />
                <h3 className={`font-bold mb-2 text-center ${isCenter ? 'text-xl' : 'text-lg'}`}>{feature.title}</h3>
                {isCenter && (
                  <p className="text-sm text-center text-gray-600">{feature.description}</p>
                )}
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

export default BusinessFeatureSlider;