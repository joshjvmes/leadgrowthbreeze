import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

const WizardContentCard = ({ title, content, bg, elements }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`min-h-screen flex items-center justify-center ${bg} p-4 sm:p-8`}
    >
      <div className="max-w-2xl bg-white bg-opacity-90 rounded-lg shadow-xl p-6 sm:p-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#0097FD] relative inline-block">
          {title}
          {title === "Magical Beginnings" && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/magical-beginnings">
                    <Info className="inline-block ml-2 cursor-pointer text-[#E51010]" size={24} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click for more about Magical Beginnings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700">{content}</p>
        <div className="text-5xl sm:text-6xl mb-6 sm:mb-8">{elements}</div>
        <Link to="/contact">
          <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white">
            Get Started
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default WizardContentCard;