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
      className={`min-h-screen flex items-center justify-center ${bg} p-8`}
    >
      <div className="max-w-2xl text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 relative inline-block">
          {title}
          {title === "Magical Beginnings" && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/magical-beginnings">
                    <Info className="inline-block ml-2 cursor-pointer" size={24} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click for more about Magical Beginnings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </h2>
        <p className="text-xl sm:text-2xl mb-8 sm:mb-12">{content}</p>
        <div className="text-6xl sm:text-7xl mb-8 sm:mb-12">{elements}</div>
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