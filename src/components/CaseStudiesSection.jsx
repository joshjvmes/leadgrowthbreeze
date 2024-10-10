import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "E-commerce Revenue Boost",
      before: "$100K/mo",
      after: "$500K/mo",
      impact: "5x increase in monthly revenue through targeted AI-driven marketing campaigns"
    },
    {
      title: "B2B Lead Generation",
      before: "50 leads/mo",
      after: "250 leads/mo",
      impact: "400% increase in qualified leads using our AI-powered lead nurturing system"
    },
    {
      title: "SaaS Customer Acquisition",
      before: "5% CR",
      after: "15% CR",
      impact: "Tripled conversion rate with personalized, AI-optimized user journeys"
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-gradient-to-b from-white to-[#E6F7FF] rounded-lg shadow-2xl backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-6 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#0097FD] font-poppins">
          Case Studies: Real Results, Real Growth
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;