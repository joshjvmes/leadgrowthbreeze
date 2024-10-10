import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CandySlider = ({ items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full p-6 sm:p-16 ${
                index % 2 === 0 ? 'bg-[#0FCEFD]' : 'bg-[#0097FD]'
              } text-white`}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 font-poppins">{item.title}</h3>
                <p className="text-base sm:text-xl mb-6 sm:mb-8">{item.description}</p>
                <div className="flex justify-center">
                  <Button className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-3">
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {prevBtnEnabled && (
        <Button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-[#0097FD] hover:bg-[#E51010] hover:text-white"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      )}
      {nextBtnEnabled && (
        <Button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-[#0097FD] hover:bg-[#E51010] hover:text-white"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      )}
    </div>
  );
};

export default CandySlider;