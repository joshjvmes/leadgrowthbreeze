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
      name: "Jared S.",
      company: "Satisfied Client",
      content: "Rocket Now's expertise in AI and marketing automation has significantly improved our lead generation and conversion rates. Their team's dedication to our success is truly impressive.",
      rating: 5
    },
    {
      name: "Michael R.",
      company: "Happy Customer",
      content: "The results we've seen with Rocket Now have been outstanding. Their innovative approach to digital marketing has helped us reach new audiences and grow our business faster than we thought possible.",
      rating: 5
    },
    {
      name: "Sarah L.",
      company: "Thrilled Partner",
      content: "Working with Rocket Now has been a game-changer for our company. Their AI-driven strategies have not only increased our ROI but also provided valuable insights into our customer base.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg shadow-2xl my-8 sm:my-16 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-poppins">
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