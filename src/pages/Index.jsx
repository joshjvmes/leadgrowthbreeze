import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RocketIcon, TargetIcon, TrendingUpIcon } from 'lucide-react';
import CandySlider from '../components/CandySlider';
import TypewriterEffect from '../components/TypewriterEffect';
import { useInView } from 'react-intersection-observer';
import MarketingCostsCalculator from '../components/MarketingCostsCalculator';
import CaseStudiesSection from '../components/CaseStudiesSection';

const Index = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  const messages = [
    "Got Milk? You do huh..",
    "How about Leads..?",
    "No..?",
    "Ok, let's talk."
  ];

  const sliderItems = [
    {
      title: "Your Bridge Between Customization and Scale",
      description: "We're not just another agency – at ROCKET NOW, we offer the highest level of service available in the industry. Our relentless dedication to your growth sets us apart.",
      buttonText: "Accelerate Your Growth"
    },
    {
      title: "Marketing Strategies Underperforming?",
      description: "Your marketing deserves a breakthrough, not just an average return. ROCKET NOW brings cutting-edge digital strategies that translate directly into business growth.",
      buttonText: "Get Your Breakthrough"
    },
    {
      title: "Need ROI? Book Out Your Sales Team?",
      description: "With our multi-channel attribution and customer-first approach, ROCKET NOW ensures you get the best return on every marketing dollar—empowering you to hit your KPIs faster than ever.",
      buttonText: "Maximize Your ROI"
    }
  ];

  const FadeInSection = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src="/rocket-logo.png" alt="ROCKET NOW" className="h-8 w-auto sm:h-12" />
          <Button className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white text-sm sm:text-base">
            Get Started
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <FadeInSection>
          <section className="text-center py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg my-8 sm:my-16 shadow-2xl backdrop-blur-md bg-opacity-90">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 sm:mb-8 font-poppins">
              Revenue Acceleration
            </h2>
            <div className="mb-6 sm:mb-8">
              <TypewriterEffect 
                messages={messages} 
                onComplete={() => setTypingComplete(true)} 
              />
            </div>
            {typingComplete && (
              <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors mt-4">
                Let's talk leads then
              </Button>
            )}
          </section>
        </FadeInSection>

        <FadeInSection>
          <CandySlider items={sliderItems} />
        </FadeInSection>

        <FadeInSection>
          <CaseStudiesSection />
        </FadeInSection>

        <FadeInSection>
          <section className="py-16 sm:py-32 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-2xl my-8 sm:my-16 backdrop-blur-md bg-opacity-90 px-4 sm:px-[10%]">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-16 font-poppins">
              Why CMOs Choose ROCKET NOW
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard 
                icon={<RocketIcon className="h-10 w-10 sm:h-12 sm:w-12 text-[#E51010]" />}
                title="AI-Powered Insights"
                description="Our cutting-edge AI algorithms provide unmatched clarity on your digital campaigns."
              />
              <FeatureCard 
                icon={<TargetIcon className="h-10 w-10 sm:h-12 sm:w-12 text-[#E51010]" />}
                title="Precision Targeting"
                description="Reach the right decision-makers at the right time with our advanced data analytics."
              />
              <FeatureCard 
                icon={<TrendingUpIcon className="h-10 w-10 sm:h-12 sm:w-12 text-[#E51010]" />}
                title="Revenue-Generating Machine"
                description="Turn your marketing efforts into a powerful engine for business growth."
              />
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg shadow-2xl my-8 sm:my-16 backdrop-blur-md bg-opacity-90">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center font-poppins">
              Business Match-Making Service
            </h3>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-center px-4">
              We connect your business with the perfect clients, creating lasting partnerships that drive mutual growth and success.
            </p>
            <div className="text-center">
              <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
                Find Your Perfect Match
              </Button>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-16 sm:py-32 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-2xl my-8 sm:my-16 backdrop-blur-md bg-opacity-90">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 font-poppins px-4">
              Their Problem + Your Solution
            </h3>
            <p className="text-lg sm:text-xl text-center mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
              We identify your potential clients' pain points and showcase how your unique solutions address them, creating a perfect match between need and offering.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
                Solve Real Problems
              </Button>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg shadow-2xl my-8 sm:my-16 backdrop-blur-md bg-opacity-90">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center font-poppins px-4">
              Customer (signaling) intent based outreach
            </h3>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-center px-4">
              Our AI-driven approach detects and responds to customer signals, ensuring your outreach is always timely, relevant, and welcomed.
            </p>
            <div className="text-center">
              <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
                Leverage Intent Signals
              </Button>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-16 sm:py-32 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-2xl my-8 sm:my-16 backdrop-blur-md bg-opacity-90">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 font-poppins px-4">
              Pre-qualified conversations…not cold leads
            </h3>
            <p className="text-lg sm:text-xl text-center mb-8 sm:mb-10 max-w-3xl mx-auto px-4">
              Say goodbye to cold calling. We deliver warm, pre-qualified leads ready for meaningful conversations that convert into lasting business relationships.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
                Start Warm Conversations
              </Button>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-16 sm:py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg shadow-2xl my-8 sm:my-16 backdrop-blur-md bg-opacity-90">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center font-poppins px-4">
              Marketing Costs Calculator
            </h3>
            <div className="max-w-2xl mx-auto">
              <MarketingCostsCalculator />
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="bg-[#0097FD] text-white py-8 sm:py-16">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2023 ROCKET NOW. All rights reserved.</p>
          <p className="mt-2">The best marketing agency near you, period.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#0FCEFD] text-white shadow-xl rounded-lg p-6">
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-full p-3 mb-4">
          {React.cloneElement(icon, { className: `${icon.props.className} text-[#E51010]` })}
        </div>
        <h4 className="mt-4 text-lg sm:text-xl font-semibold font-poppins mb-2">{title}</h4>
      </div>
      <p className="text-center text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default Index;