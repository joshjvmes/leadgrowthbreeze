import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const CandySlider = ({ items }) => {
  return (
    <div className="overflow-hidden py-16">
      <motion.div
        animate={{ x: [0, -100 * items.length + 100 + '%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        className="flex"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-6 ${
              index % 2 === 0 ? 'bg-[#0FCEFD]' : 'bg-[#0097FD]'
            } text-white`}
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="mb-6">{item.description}</p>
            <Button className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
              {item.buttonText}
            </Button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CandySlider;