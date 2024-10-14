import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Milk } from 'lucide-react';
import VectorIconMarquee from '../components/VectorIconMarquee';
import QuotesSection from '../components/QuotesSection';

const GotMilk = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-[#0097FD] hover:text-[#E51010] mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-[#0097FD] leading-tight">
            <span className="block mb-2">Customers crave</span>
            <span className="block mb-2">
              <span className="text-[#E51010]">conversations</span> about their problems
            </span>
            <span className="block text-3xl md:text-5xl text-gray-600">
              —not your product features & functions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">
            Stop sending cold emails that get ignored. Start having conversations that matter.
          </p>
        </header>

        <VectorIconMarquee />

        <section className="mb-16 max-w-4xl mx-auto bg-gradient-to-r from-[#0FCEFD] to-[#0097FD] text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 font-poppins">How We Help: Sales Development Rep-As-A-Service</h2>
          <p className="text-lg mb-6">
            Go-to-Market Engineers who handle the heavy lifting – prospecting, message crafting, vetting leads, and conversation recapping – so your Account Executives can concentrate on closing deals.
          </p>
        </section>

        <QuotesSection />

        <section className="text-center mb-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#0097FD] font-poppins">Ready for a different approach?</h2>
          <div className="flex justify-center items-center mb-8">
            <Milk className="w-12 h-12 text-[#0097FD] mr-4" />
            <p className="text-xl md:text-2xl text-gray-600 italic">
              "Got conversations?"
            </p>
          </div>
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
      </div>
    </div>
  );
};

export default GotMilk;