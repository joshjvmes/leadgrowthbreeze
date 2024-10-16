import React from 'react';
import { Link } from 'react-router-dom';
import { Workflow, ArrowRight, Link as LinkIcon, User, Home, Building, Building2, Waves, Mountain } from 'lucide-react';

const Workflows = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#0097FD]">Workflows</h1>
      
      <div className="relative">
        {/* Central Node */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0FCEFD] p-4 rounded-lg shadow-lg text-white text-center">
          <Workflow className="mx-auto mb-2" />
          <p className="font-bold">Fortune Marketing (FM)</p>
          <p>Kelowna Real-Estate Portal</p>
        </div>

        {/* Surrounding Nodes */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          <Node icon={<Building />} title="Commercial" />
          <Node icon={<Building2 />} title="Apartments" />
          <Node icon={<Home />} title="Residential" />
          <Node icon={<Home />} title="Townhomes" />
          <Node icon={<Waves />} title="Lakefront" />
          <Node icon={<Mountain />} title="Lakeview" />
        </div>

        {/* Action Items and Landing Pages */}
        <div className="flex justify-between mt-24">
          <LandingPage title="Greensquare" />
          <div className="text-center">
            <ArrowRight className="mx-auto mb-2" />
            <p>Action: Signs Up</p>
          </div>
          <MarketingFunnel />
          <div className="text-center">
            <ArrowRight className="mx-auto mb-2" />
            <p>Action: Signs Up</p>
          </div>
          <LandingPage title="RocketHome" />
        </div>

        {/* Backlinks */}
        <div className="flex justify-between mt-16">
          <div className="bg-[#E6F7FF] p-4 rounded-lg shadow">
            <LinkIcon className="mx-auto mb-2" />
            <p>Backlink to FM</p>
          </div>
          <div className="bg-[#E6F7FF] p-4 rounded-lg shadow">
            <LinkIcon className="mx-auto mb-2" />
            <p>Backlink to FM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Node = ({ icon, title }) => (
  <div className="bg-[#E6F7FF] p-4 rounded-lg shadow text-center">
    {icon}
    <p className="mt-2">{title}</p>
  </div>
);

const LandingPage = ({ title }) => (
  <div className="bg-[#E6F7FF] p-4 rounded-lg shadow text-center">
    <User className="mx-auto mb-2" />
    <p>{title}</p>
    <p className="text-sm text-gray-600">Landing Page</p>
  </div>
);

const MarketingFunnel = () => (
  <div className="bg-[#E51010] p-4 rounded-lg shadow text-center text-white">
    <ArrowRight className="mx-auto mb-2" />
    <p>Marketing Funnel</p>
  </div>
);

export default Workflows;