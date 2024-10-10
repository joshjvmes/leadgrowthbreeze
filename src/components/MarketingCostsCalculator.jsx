import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const MarketingCostsCalculator = () => {
  const [budget, setBudget] = useState(0);
  const [result, setResult] = useState('');

  const handleSliderChange = (value) => {
    setBudget(value[0]);
  };

  const calculateResults = () => {
    let resultText = '';
    if (budget < 100) {
      resultText = 'Limited reach: Basic social media management';
    } else if (budget < 200) {
      resultText = 'Moderate impact: Social media + basic content creation';
    } else if (budget < 300) {
      resultText = 'Growing presence: Social media, content, and basic SEO';
    } else if (budget < 400) {
      resultText = 'Significant reach: Comprehensive digital marketing strategy';
    } else {
      resultText = 'Maximum impact: Full-scale multi-channel marketing campaign';
    }
    setResult(resultText);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-[#0097FD]">Marketing Costs Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Marketing Budget: ${budget}
        </label>
        <Slider
          defaultValue={[0]}
          max={500}
          step={50}
          onValueChange={handleSliderChange}
        />
      </div>
      <Button 
        onClick={calculateResults}
        className="bg-[#E51010] hover:bg-[#0097FD] text-white font-bold py-2 px-4 rounded"
      >
        Calculate Impact
      </Button>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="text-[#0097FD] font-semibold">{result}</p>
        </div>
      )}
    </div>
  );
};

export default MarketingCostsCalculator;