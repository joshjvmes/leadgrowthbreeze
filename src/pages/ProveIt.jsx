import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import MarketingCostsCalculator from '../components/MarketingCostsCalculator';
import CaseStudiesSection from '../components/CaseStudiesSection';

const ProveIt = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#0097FD]">
          PROVE IT
        </h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#0097FD]">Case Study</h2>
          <CaseStudyCard />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#0097FD]">Marketing Costs Calculator</h2>
          <MarketingCostsCalculator />
        </section>

        <CaseStudiesSection />
      </div>
    </div>
  );
};

export default ProveIt;