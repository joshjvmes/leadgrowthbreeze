import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from 'react-router-dom';

const WizardHatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showStars, setShowStars] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button 
          className="mx-auto block transition-transform hover:scale-110 relative"
          onMouseEnter={() => setShowStars(true)}
          onMouseLeave={() => setShowStars(false)}
          onClick={() => setIsOpen(true)}
        >
          <img src="/wizard-hat.svg" alt="Wizard Hat" className="w-24 h-24 sm:w-32 sm:h-32" />
          {showStars && (
            <>
              <div className="star-animation star-1"></div>
              <div className="star-animation star-2"></div>
              <div className="star-animation star-3"></div>
              <div className="star-animation star-4"></div>
              <div className="star-animation star-5"></div>
            </>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-2 sm:p-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center small-caps gradient-text">The RocketNow Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <ComicPanel 
              imageSrc="/comic-1.svg" 
              altText="Seeker on a precipice" 
              text="Ah, seeker, you stand on the precipice of greatness, searching for the key to unlock your potential."
            />
            <ComicPanel 
              imageSrc="/comic-2.svg" 
              altText="RocketNow compass" 
              text="Look no further, for RocketNow is the compass that guides the ambitious to new heights."
            />
            <ComicPanel 
              imageSrc="/comic-3.svg" 
              altText="Tools of innovation" 
              text="With tools forged in the fires of innovation, RocketNow offers more than just speed—it provides clarity, precision, and the wisdom of experience."
            />
            <ComicPanel 
              imageSrc="/comic-4.svg" 
              altText="Soaring above competition" 
              text="Imagine soaring above the competition, your journey propelled by the finest resources and expert guidance."
            />
          </div>
          <p className="mt-2 sm:mt-4 text-center text-sm sm:text-base">The stars are within your grasp, if you dare to take the first step.</p>
          <div className="mt-2 sm:mt-4 text-center">
            <Link to="/contact">
              <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white text-sm sm:text-base">
                Launch Your Dreams
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ComicPanel = ({ imageSrc, altText, text }) => (
  <div className="comic-panel bg-gray-100 p-2 sm:p-4 rounded-lg">
    <img src={imageSrc} alt={altText} className="w-full h-auto mb-2" />
    <p className="text-xs sm:text-sm">{text}</p>
  </div>
);

export default WizardHatPopup;