import React from 'react';

const quotes = [
  {
    text: "ROCKET NOW transformed our digital presence. Their AI-driven strategies doubled our lead generation in just three months!",
    author: "Sarah Johnson",
    company: "TechInnovate Solutions"
  },
  {
    text: "The team at ROCKET NOW is simply outstanding. They delivered results beyond our expectations, truly living up to their promise of being the best marketing agency.",
    author: "Michael Chen",
    company: "GrowFast Startups"
  },
  {
    text: "Working with ROCKET NOW was a game-changer for our eco-friendly brand. Their targeted campaigns helped us reach the right audience and skyrocket our sales.",
    author: "Emily Rodriguez",
    company: "EcoFriendly Products"
  }
];

const QuotesSection = () => {
  return (
    <section className="my-16 bg-gradient-to-r from-[#0FCEFD] to-[#0097FD] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-white text-center font-poppins">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {quotes.map((quote, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">"{quote.text}"</p>
            <p className="font-bold text-[#0097FD]">{quote.author}</p>
            <p className="text-sm text-gray-600">{quote.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuotesSection;