import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, TargetIcon, TrendingUpIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="container mx-auto py-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/rocket-logo.png" alt="Rocket Logo" className="h-12 w-auto mr-4" />
          <h1 className="text-4xl font-bold text-blue-900">RocketNow</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-6">
            Supercharge Your Lead Generation
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Empower your sales team with high-quality leads and watch your revenue soar. 
            RocketNow is the ultimate solution for CMOs looking to overcome lead generation challenges.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </section>

        <section className="py-16">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Why CMOs Choose RocketNow
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<RocketIcon className="h-12 w-12 text-blue-600" />}
              title="Accelerated Lead Generation"
              description="Our AI-powered platform identifies and engages high-potential leads faster than ever before."
            />
            <FeatureCard 
              icon={<TargetIcon className="h-12 w-12 text-blue-600" />}
              title="Precision Targeting"
              description="Leverage advanced data analytics to reach the right decision-makers at the right time."
            />
            <FeatureCard 
              icon={<TrendingUpIcon className="h-12 w-12 text-blue-600" />}
              title="Measurable ROI"
              description="Track your lead generation efforts with real-time analytics and prove the value of your marketing initiatives."
            />
          </div>
        </section>

        <section className="py-16 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Ready to Transform Your Lead Generation?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful CMOs who have revolutionized their lead generation strategies with RocketNow.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Schedule a Demo
          </Button>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 RocketNow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          {icon}
          <span className="mt-4 text-xl font-semibold">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;