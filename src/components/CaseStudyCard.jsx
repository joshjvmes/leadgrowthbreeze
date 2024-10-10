import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

const CaseStudyCard = ({ title, before, after, impact }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col space-y-4">
      <h3 className="text-2xl font-bold text-[#0097FD]">{title}</h3>
      <div className="flex justify-between items-center">
        <div className="text-center">
          <p className="text-gray-600">Before</p>
          <p className="text-3xl font-bold">{before}</p>
        </div>
        <ArrowRightIcon className="text-[#E51010] w-8 h-8" />
        <div className="text-center">
          <p className="text-gray-600">After</p>
          <p className="text-3xl font-bold">{after}</p>
        </div>
      </div>
      <p className="text-lg text-gray-700">{impact}</p>
    </div>
  );
};

export default CaseStudyCard;