import React from 'react';
import { Star } from 'lucide-react';

const Review = ({ name, company, content, rating }) => (
  <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col space-y-4">
    <div className="flex items-center space-x-2">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="text-yellow-400 fill-current" size={20} />
      ))}
    </div>
    <p className="text-gray-700 italic">"{content}"</p>
    <div className="text-right">
      <p className="font-bold text-[#0097FD]">{name}</p>
      <p className="text-sm text-gray-600">{company}</p>
    </div>
  </div>
);

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechInnovate Solutions",
      content: "ROCKET NOW transformed our digital presence. Their AI-driven strategies doubled our lead generation in just three months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GrowFast Startups",
      content: "The team at ROCKET NOW is simply outstanding. They delivered results beyond our expectations, truly living up to their promise of being the best marketing agency.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "EcoFriendly Products",
      content: "Working with ROCKET NOW was a game-changer for our eco-friendly brand. Their targeted campaigns helped us reach the right audience and skyrocket our sales.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg shadow-2xl my-8 sm:my-16 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-poppins small-caps gradient-text">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;