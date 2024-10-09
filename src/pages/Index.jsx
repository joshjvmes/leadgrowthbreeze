import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, TargetIcon, TrendingUpIcon, DollarSignIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">ROCKET NOW</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <section className="text-center py-24 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg my-12">
          <h2 className="text-5xl font-extrabold mb-6">
            Revenue Acceleration
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Got Milk? You do huh. How about Leads? No? Ok, let's talk.
          </p>
          <Button size="lg" className="bg-[#E51010] hover:bg-red-700 text-white">
            Let's Talk Leads
          </Button>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-xl my-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why CMOs Choose ROCKET NOW
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
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

        <section className="py-24 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg my-12">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Your Bridge Between Customization and Scale
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
            We're not just another agency – at ROCKET NOW, we offer the highest level of service available in the industry. Our relentless dedication to your growth sets us apart.
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-[#E51010] hover:bg-red-700 text-white">
              Accelerate Your Growth
            </Button>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-white to-[#E6F7FF] text-[#0097FD] rounded-lg shadow-xl my-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Marketing Strategies Underperforming?
          </h3>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            Your marketing deserves a breakthrough, not just an average return. ROCKET NOW brings cutting-edge digital strategies that translate directly into business growth.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-[#E51010] hover:bg-red-700 text-white">
              Get Your Breakthrough
            </Button>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#0FCEFD] to-[#0097FD] text-white rounded-lg my-12">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Need ROI? Book Out Your Sales Team?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
            With our multi-channel attribution and customer-first approach, ROCKET NOW ensures you get the best return on every marketing dollar—empowering you to hit your KPIs faster than ever.
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-[#E51010] hover:bg-red-700 text-white">
              Maximize Your ROI
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#0097FD] text-white py-12">
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
    <Card className="bg-[#0FCEFD] text-white">
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