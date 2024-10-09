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
              className={`flex-shrink-0 w-full p-16 ${
                index % 2 === 0 ? 'bg-[#0FCEFD]' : 'bg-[#0097FD]'
              } text-white`}
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl font-bold mb-6 font-poppins">{item.title}</h3>
                <p className="text-xl mb-8">{item.description}</p>
                <Button className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors text-lg px-8 py-3">
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {prevBtnEnabled && (
        <Button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-[#0097FD] hover:bg-[#E51010] hover:text-white"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      )}
      {nextBtnEnabled && (
        <Button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-[#0097FD] hover:bg-[#E51010] hover:text-white"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      )}
    </div>
  );
};

export default CandySlider;