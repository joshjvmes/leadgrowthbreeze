import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const EnchantedForest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-500 to-teal-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Enchanted Forest</h1>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Packages</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Starter Package</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Client onboarding worksession</li>
              <li>Go-To-Market (GTM) Strategy</li>
              <li>Tech stack setup</li>
              <li>Email infrastructure setup and warm-up</li>
              <li>CRM Integration</li>
              <li>Domain and mailbox purchase included</li>
              <li>AI sales rep trained specifically for your business</li>
              <li>Prospect finding and list-building</li>
              <li>Hyper-personalized email creation</li>
              <li>Mailbox Delivery Optimization</li>
              <li>Bi-weekly reporting</li>
              <li>Monthly Campaign Strategy Optimization Worksessions</li>
            </ul>
            <h4 className="font-bold mb-2">Rocket Now Accountabilities:</h4>
            <ul className="list-disc list-inside mb-4">
              <li>500 LinkedIn outreaches per month</li>
              <li>5,000 email outreaches per month</li>
              <li>100% client fee ROI guarantee</li>
            </ul>
            <p className="font-bold mb-2">Price: $5,000/month (3 month min)</p>
            <p>5% discount for annual contract</p>
          </div>

          {/* Growth Package */}
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Growth Package</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Starter Package +</li>
              <li>Social Listening (Predicting Buyer Intent)</li>
              <li>Inbox management</li>
              <li>Dedicated customer success manager</li>
              <li>Bi-weekly Campaign Strategy Optimization Worksessions</li>
            </ul>
            <h4 className="font-bold mb-2">Rocket Now Accountabilities:</h4>
            <ul className="list-disc list-inside mb-4">
              <li>1,000 LinkedIn outreaches per month</li>
              <li>10,000 email outreaches per month</li>
              <li>100% client fee ROI guarantee</li>
            </ul>
            <p className="font-bold mb-2">Price: $10,000/month (3 month min)</p>
            <p>10% discount for annual contract</p>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Enterprise Package</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Starter + Growth Package +</li>
              <li>Advanced CRM integration with workflow automation</li>
              <li>Real-time analytics with custom dashboards</li>
              <li>Weekly campaign reporting</li>
              <li>Weekly Campaign Strategy Optimization Worksessions</li>
              <li>Thought leader content creation + LI social posting</li>
            </ul>
            <h4 className="font-bold mb-2">Rocket Now Accountabilities:</h4>
            <ul className="list-disc list-inside mb-4">
              <li>2,000 LinkedIn outreaches per month</li>
              <li>20,000 email outreaches per month</li>
              <li>100% client fee ROI guarantee</li>
            </ul>
            <p className="font-bold mb-2">Price: $20,000/month (3 month min)</p>
            <p>15% discount for annual contract</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Ala-Carte (Organic Customer Discovery) Services</h3>
          <ul className="list-disc list-inside">
            <li>SEO – On page, Off page and Technical</li>
            <li>Website visitor Retargeting</li>
            <li>Website Link Building</li>
            <li>Demand Generation Campaign (Funnel nurturing support)</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link to="/dragons-lair">
            <Button className="bg-[#E51010] hover:bg-[#B30000] text-white">
              Enter the Dragon's Lair
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnchantedForest;
