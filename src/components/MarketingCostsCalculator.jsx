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
    if (budget < 2500) {
      resultText = 'Limited reach: Basic social media management and content creation';
    } else if (budget < 5000) {
      resultText = 'Moderate impact: Enhanced social media, content creation, and basic SEO';
    } else if (budget < 7500) {
      resultText = 'Growing presence: Comprehensive digital marketing strategy with PPC advertising';
    } else if (budget < 10000) {
      resultText = 'Significant reach: Multi-channel marketing campaign with advanced analytics';
    } else if (budget < 12500) {
      resultText = 'Extensive impact: Full-scale marketing automation and personalized campaigns';
    } else {
      resultText = 'Maximum impact: Enterprise-level, AI-driven marketing strategies across all channels';
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
          max={15000}
          step={500}
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