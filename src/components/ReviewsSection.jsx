import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, company, review }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 mr-3">
        <div className="w-10 h-10 rounded-full bg-[#0097FD] flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-700">{review}</p>
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
    <section className="py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] rounded-lg shadow-2xl">
      <div className="container mx-auto px-6 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white font-poppins">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;