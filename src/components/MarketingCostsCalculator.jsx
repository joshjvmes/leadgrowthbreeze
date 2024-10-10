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
    if (budget < 750) {
      resultText = 'Basic: Limited social media management';
    } else if (budget < 2250) {
      resultText = 'Starter: Enhanced social media and basic content creation';
    } else if (budget < 3750) {
      resultText = 'Growth: Comprehensive digital strategy with SEO focus';
    } else if (budget < 5250) {
      resultText = 'Advanced: Multi-channel campaign with PPC and analytics';
    } else if (budget < 6750) {
      resultText = 'Premium: Full-scale marketing automation and personalization';
    } else {
      resultText = 'Enterprise: AI-driven strategies across all channels';
    }
    setResult(resultText);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-[#0097FD]">Marketing Costs Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Marketing Budget: ${budget.toLocaleString()}
        </label>
        <Slider
          defaultValue={[0]}
          max={7500}
          step={750}
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