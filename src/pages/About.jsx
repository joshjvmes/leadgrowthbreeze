import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-[#0097FD] hover:text-[#E51010] mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-[#0097FD]">
            About Rocket Now
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            The AI marketing agency for high-profile, high-growth clients.
          </p>
        </header>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#0097FD] font-poppins">Our Mission</h2>
          <p className="text-lg mb-6">
            At Rocket Now, we offer the most rigorous marketing strategy and execution for success with relentless dedication to your growth. We are not just another agency – we provide the highest level of service available in the industry.
          </p>
          <p className="text-lg mb-6">
            With over 10 years of experience working with brands of all sizes, from startups to global leaders, Rocket Now has what it takes to help you break through the clutter and win customers' lifetime relationships.
          </p>
        </section>

        <section className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#0097FD] font-poppins">What Sets Us Apart</h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>AI-powered insights and data-driven strategies</li>
            <li>Customized solutions tailored to meet your specific needs</li>
            <li>Multi-channel attribution and customer-first approach</li>
            <li>Unmatched clarity on your digital campaigns</li>
            <li>Focus on translating marketing efforts into business growth</li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#0097FD] font-poppins">Ready to Rocket Your Growth?</h2>
          <p className="text-xl mb-8 text-gray-600">Contact us to learn more about how we can help you do more with less.</p>
          <Link to="/contact">
            <Button className="bg-[#E51010] hover:bg-[#B30000] text-white font-bold py-3 px-6 rounded-full text-lg">
              Contact Us
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;