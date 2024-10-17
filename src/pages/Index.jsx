import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import TypewriterEffect from '../components/TypewriterEffect';
import AnimatedBackground from '../components/AnimatedBackground';
import BusinessFeatureSlider from '../components/BusinessFeatureSlider';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ReviewsSection from '../components/ReviewsSection';
import ProcessCardSlider from '../components/ProcessCardSlider';
import TimelineSection from '../components/TimelineSection';
import QuotesSection from '../components/QuotesSection';
import VectorIconMarquee from '../components/VectorIconMarquee';

const Index = () => {
  const messages = [
    "Welcome to Rocket Now, where AI-powered marketing meets relentless dedication to your growth.",
    "We're not just another agency – we offer the highest level of service in the industry.",
    "Ready to skyrocket your business? Let's get started!"
  ];

  return (
    <div className="relative">
      <AnimatedBackground />
      <main className="relative z-10">
        <section className="min-h-screen flex items-center justify-center bg-white bg-opacity-80 p-8">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8 text-center font-poppins small-caps gradient-text">
              Rocket Now
            </h1>
            <TypewriterEffect messages={messages} />
            <p className="text-xl sm:text-2xl mb-8 sm:mb-12">
              AI-powered marketing solutions for high-growth businesses
            </p>
            <Link to="/contact">
              <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white text-lg sm:text-xl px-8 py-4">
                Get Started
              </Button>
            </Link>
          </div>
        </section>

        <BusinessFeatureSlider />
        <CaseStudiesSection />
        <ReviewsSection />
        <ProcessCardSlider />
        <TimelineSection />
        <QuotesSection />
        <VectorIconMarquee />

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Ready to Skyrocket Your Business?</h2>
            <Link to="/contact">
              <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white text-lg sm:text-xl px-8 py-4">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;