import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Customers crave conversations about their problems—not pitches about your product's features
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Stop sending cold emails that get ignored. Start having conversations that matter.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center font-poppins">How We Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Go-to-Market Engineer</h3>
              <p>We automate low-value tasks -- enabling your Account Executives to focus on high-value tasks.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">SDR-As-A-Service</h3>
              <p>We handle the heavy lifting of prospecting, message crafting, vetting leads, and conversation recapping — so your team can concentrate on closing deals.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 font-poppins">Ready for a different approach?</h2>
          <p className="text-xl mb-8">Contact us to learn more about how we can help you do more with less.</p>
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