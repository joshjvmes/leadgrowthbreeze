import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Milk } from 'lucide-react';
import VectorIconMarquee from '../components/VectorIconMarquee';
import QuotesSection from '../components/QuotesSection';

const CelestialRealm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-white hover:text-[#E51010] mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins leading-tight">
            <span className="block mb-2">Stop sending cold emails that get ignored.</span>
            <span className="block mb-2">Start having discussions that matter.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Customers crave conversations about their problems—not your product features & functions
          </p>
        </header>

        <VectorIconMarquee />

        <section className="mb-16 max-w-4xl mx-auto bg-white text-indigo-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 font-poppins">How We Help: Sales Development Rep-As-A-Service</h2>
          <p className="text-lg mb-6">
            Go-to-Market Engineers who handle the heavy lifting – prospecting, message crafting, lead vetting, and conversation recapping – so your Account Executives can concentrate on closing deals.
          </p>
          <p className="text-lg mb-6">
            Imagine having a list of prospects who already know they need your solution. That's what we do—using AI to find your ideal customers and engage them in conversations about the problems you solve. No spam. No endless cold calls. Just real connections.
          </p>
        </section>

        <QuotesSection />

        <section className="text-center mb-16 bg-white text-indigo-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#0097FD] font-poppins">Got Conversations?</h2>
          <div className="flex justify-center items-center mb-8">
            <Milk className="w-12 h-12 text-[#0097FD] mr-4" />
            <p className="text-xl md:text-2xl text-gray-600 italic">
              "Contact us to learn more about how we can help you do more with less."
            </p>
          </div>
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

export default CelestialRealm;
