import React from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from 'react-router-dom';

const CandySlider = ({ items, setShowProspectingPopup }) => {
  const navigate = useNavigate();

  const handleButtonClick = (action) => {
    switch (action) {
      case 'accelerate':
        setShowProspectingPopup(true);
        break;
      case 'breakthrough':
        navigate('/contact');
        break;
      case 'maximize':
        // Scroll to the Marketing Costs Calculator section
        const calculatorSection = document.getElementById('marketing-costs-calculator');
        if (calculatorSection) {
          calculatorSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        console.log('No action specified for this button');
    }
  };

  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
              <Button 
                className="bg-[#E51010] hover:bg-[#0097FD] text-white"
                onClick={() => handleButtonClick(item.action)}
              >
                {item.buttonText}
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CandySlider;