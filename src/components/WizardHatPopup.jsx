import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const WizardHatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="mx-auto block transition-transform hover:scale-110">
          <img src="/wizard-hat.svg" alt="Wizard Hat" className="w-32 h-32" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 text-center small-caps gradient-text">The RocketNow Journey</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="comic-panel bg-gray-100 p-4 rounded-lg">
              <img src="/comic-1.svg" alt="Seeker on a precipice" className="mb-2" />
              <p>Ah, seeker, you stand on the precipice of greatness, searching for the key to unlock your potential.</p>
            </div>
            <div className="comic-panel bg-gray-100 p-4 rounded-lg">
              <img src="/comic-2.svg" alt="RocketNow compass" className="mb-2" />
              <p>Look no further, for RocketNow is the compass that guides the ambitious to new heights.</p>
            </div>
            <div className="comic-panel bg-gray-100 p-4 rounded-lg">
              <img src="/comic-3.svg" alt="Tools of innovation" className="mb-2" />
              <p>With tools forged in the fires of innovation, RocketNow offers more than just speed—it provides clarity, precision, and the wisdom of experience.</p>
            </div>
            <div className="comic-panel bg-gray-100 p-4 rounded-lg">
              <img src="/comic-4.svg" alt="Soaring above competition" className="mb-2" />
              <p>Imagine soaring above the competition, your journey propelled by the finest resources and expert guidance.</p>
            </div>
          </div>
          <p className="mt-4 text-center">The stars are within your grasp, if you dare to take the first step.</p>
          <div className="mt-4 text-center">
            <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white">
              Launch Your Dreams
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WizardHatPopup;