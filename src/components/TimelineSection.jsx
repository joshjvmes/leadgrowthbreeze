import React from 'react';
import { CheckCircle } from 'lucide-react';

const TimelinePhase = ({ number, title, items }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E51010] text-white flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6">
      {number}
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4 text-[#0097FD]">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="flex-shrink-0 w-5 h-5 text-[#E51010] mr-2 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TimelineSection = () => {
  const phases = [
    {
      number: 1,
      title: "Copywriting",
      items: [
        "Enriching Data with AI for Content and Messaging",
        "Humanized Automations for Inbound Introductions",
        "Warming Inbound and Heating Outbound Introductions",
        "LinkedIn: Status Upgrade, Shape Messaging to Targeting, Agent Automation"
      ]
    },
    {
      number: 2,
      title: "Messaging",
      items: [
        "Email Outreach: Content Strategy Reflecting Targeting",
        "Email Strategy Reflecting Targeting",
        "Website Hidden IP Retargeting"
      ]
    },
    {
      number: 3,
      title: "Inbound",
      items: [
        "Global B2B Ads",
        "Google Global AI Inbound"
      ]
    },
    {
      number: 4,
      title: "Optimization",
      items: [
        "Continuous Performance Analysis",
        "AI-Driven Strategy Refinement",
        "Scalable Growth Implementation"
      ]
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-gradient-to-b from-white to-[#E6F7FF] rounded-lg shadow-2xl my-8 sm:my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#0097FD] font-poppins">
          Our Proven Growth Timeline
        </h2>
        <div className="space-y-12">
          {phases.map((phase) => (
            <TimelinePhase key={phase.number} {...phase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;