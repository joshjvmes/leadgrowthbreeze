import React from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CandySlider = ({ items }) => {
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
                onClick={item.onButtonClick}
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