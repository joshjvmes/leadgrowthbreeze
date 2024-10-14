import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Users, MessageCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-[#0097FD] hover:text-[#E51010] mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-[#0097FD]">
            Customers crave conversations about their problems—not product feature & function sales pitches
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Stop sending cold emails that get ignored. Start having conversations that matter.
          </p>
          <div className="w-full max-w-3xl mx-auto">
            <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <rect width="200" height="100" fill="#E6F7FF" />
              <circle cx="100" cy="50" r="40" fill="#0097FD" />
              <path d="M80 50 L120 50 M100 30 L100 70" stroke="white" strokeWidth="4" />
            </svg>
          </div>
        </header>

        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#0097FD] font-poppins text-center">How We Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E6F7FF] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-[#E51010] mr-2" />
                <h3 className="text-2xl font-bold text-[#0097FD]">Go-to-Market Engineers</h3>
              </div>
              <p className="text-gray-700">
                We automate low-value tasks -- enabling your Account Executives to focus on high-value tasks.
              </p>
              <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto mt-4">
                <rect width="100" height="50" fill="#0097FD" opacity="0.1" />
                <path d="M10 25 L90 25" stroke="#0097FD" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="25" cy="25" r="5" fill="#E51010" />
                <circle cx="50" cy="25" r="5" fill="#E51010" />
                <circle cx="75" cy="25" r="5" fill="#E51010" />
              </svg>
            </div>
            <div className="bg-[#E6F7FF] p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-[#E51010] mr-2" />
                <h3 className="text-2xl font-bold text-[#0097FD]">SDR-As-A-Service</h3>
              </div>
              <p className="text-gray-700">
                We handle the heavy lifting of prospecting, message crafting, vetting leads, and conversation recapping — so your team can concentrate on closing deals.
              </p>
              <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto mt-4">
                <rect width="100" height="50" fill="#0097FD" opacity="0.1" />
                <circle cx="20" cy="25" r="15" fill="#E51010" opacity="0.5" />
                <circle cx="50" cy="25" r="15" fill="#E51010" opacity="0.5" />
                <circle cx="80" cy="25" r="15" fill="#E51010" opacity="0.5" />
              </svg>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#0097FD] font-poppins">Ready for a different approach?</h2>
          <p className="text-xl mb-8 text-gray-600">Contact us to learn more about how we can help you do more with less.</p>
          <div className="flex justify-center items-center space-x-4">
            <MessageCircle className="w-12 h-12 text-[#E51010]" />
            <Link to="/contact">
              <Button className="bg-[#E51010] hover:bg-[#B30000] text-white font-bold py-3 px-6 rounded-full text-lg">
                Contact Us
              </Button>
            </Link>
            <MessageCircle className="w-12 h-12 text-[#E51010]" />
          </div>
        </section>

        <div className="w-full max-w-3xl mx-auto">
          <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <rect width="200" height="50" fill="#E6F7FF" />
            <path d="M0 25 Q50 0 100 25 Q150 50 200 25" stroke="#0097FD" strokeWidth="2" fill="none" />
            <circle cx="100" cy="25" r="10" fill="#E51010" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Services;