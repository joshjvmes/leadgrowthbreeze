import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, TargetIcon, TrendingUpIcon, UsersIcon, PuzzleIcon, SignalIcon, PhoneCallIcon } from 'lucide-react';
import CandySlider from '../components/CandySlider';

const Index = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">ROCKET NOW</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <section className="text-center py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg my-16 shadow-2xl backdrop-blur-md bg-opacity-90">
          <h2 className="text-5xl font-extrabold mb-8">
            Revenue Acceleration
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Got Milk? You do huh. How about Leads? No? Ok, let's talk.
          </p>
          <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
            Let's Talk Leads
          </Button>
        </section>

        <CandySlider items={sliderItems} />

        <section className="py-32 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-2xl my-16 backdrop-blur-md bg-opacity-90 px-[10%]">
          <h3 className="text-3xl font-bold text-center mb-16">
            Why CMOs Choose ROCKET NOW
          </h3>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<RocketIcon className="h-12 w-12 text-[#E51010]" />}
              title="AI-Powered Insights"
              description="Our cutting-edge AI algorithms provide unmatched clarity on your digital campaigns."
            />
            <FeatureCard 
              icon={<TargetIcon className="h-12 w-12 text-[#E51010]" />}
              title="Precision Targeting"
              description="Reach the right decision-makers at the right time with our advanced data analytics."
            />
            <FeatureCard 
              icon={<TrendingUpIcon className="h-12 w-12 text-[#E51010]" />}
              title="Revenue-Generating Machine"
              description="Turn your marketing efforts into a powerful engine for business growth."
            />
          </div>
        </section>

        <section className="py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg shadow-2xl my-16 backdrop-blur-md bg-opacity-90">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Business Match-Making Service
          </h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-center">
            We connect your business with the perfect clients, creating lasting partnerships that drive mutual growth and success.
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
              Find Your Perfect Match
            </Button>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-2xl my-16 backdrop-blur-md bg-opacity-90">
          <h3 className="text-3xl font-bold text-center mb-10">
            Their Problem + Your Solution
          </h3>
          <p className="text-xl text-center mb-10 max-w-3xl mx-auto">
            We identify your potential clients' pain points and showcase how your unique solutions address them, creating a perfect match between need and offering.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
              Solve Real Problems
            </Button>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg shadow-2xl my-16 backdrop-blur-md bg-opacity-90">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Customer (signaling) intent based outreach
          </h3>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-center">
            Our AI-driven approach detects and responds to customer signals, ensuring your outreach is always timely, relevant, and welcomed.
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
              Leverage Intent Signals
            </Button>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-2xl my-16 backdrop-blur-md bg-opacity-90">
          <h3 className="text-3xl font-bold text-center mb-10">
            Pre-qualified conversations…not cold leads
          </h3>
          <p className="text-xl text-center mb-10 max-w-3xl mx-auto">
            Say goodbye to cold calling. We deliver warm, pre-qualified leads ready for meaningful conversations that convert into lasting business relationships.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-[#E51010] hover:bg-white hover:text-[#E51010] text-white shadow-lg transition-colors">
              Start Warm Conversations
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#0097FD] text-white py-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 ROCKET NOW. All rights reserved.</p>
          <p className="mt-2">The best marketing agency near you, period.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="bg-[#0FCEFD] text-white shadow-xl">
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          {icon}
          <span className="mt-4 text-xl font-semibold">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;