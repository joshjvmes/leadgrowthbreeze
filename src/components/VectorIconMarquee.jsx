import React from 'react';
import Marquee from 'react-fast-marquee';
import { MessageCircle, Users, TrendingUp, BarChart, Target, Zap } from 'lucide-react';

const VectorIconMarquee = () => {
  const icons = [MessageCircle, Users, TrendingUp, BarChart, Target, Zap];

  return (
    <div className="my-16">
      <Marquee gradient={false} speed={50}>
        {[...icons, ...icons].map((Icon, index) => (
          <div key={index} className="mx-20">
            <Icon size={48} className="text-[#0097FD]" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default VectorIconMarquee;