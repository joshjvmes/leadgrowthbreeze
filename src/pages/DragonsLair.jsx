import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const DragonsLair = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-red-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Dragon's Lair</h1>
        <h2 className="text-3xl font-bold mb-6 text-center">When is the right time to work with Rocket Now?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Struggling to Hit Quarterly Sales Targets</h3>
            <p>We help companies scale their sales efforts without the need to hire and train additional SDRs, enabling them to meet and exceed sales goals.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Need to Scale Sales Without Hiring More SDRs</h3>
            <p>Our AI SDRs handle prospecting, outreach, and research, allowing your existing sales team to focus on closing deals and increasing efficiency.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Difficulty Retaining Top SDR Talent</h3>
            <p>By empowering your best reps to close more deals and earn higher commissions, we improve job satisfaction and retention of top-performing talent.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Sales Reps Wasting Time on Low-Value, Repetitive Tasks</h3>
            <p>We automate tedious tasks, freeing up your sales team to concentrate on high-value activities like closing deals.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Data Overload Making It Hard to Find the Right Prospects</h3>
            <p>Our AI SDRs filter through vast amounts of data to identify high-quality leads, reducing overwhelm and increasing effectiveness.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Sales Reps Engaging with Unqualified Leads</h3>
            <p>We pre-qualify leads so your team only interacts with prospects who are ready to buy, improving conversion rates.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Need to Engage with Pre-Intent Leads</h3>
            <p>By leveraging sales triggers and monitoring social conversations, we identify prospects already interested in solutions like yours.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Risk of Falling Behind Competitors</h3>
            <p>We help you stay competitive by automating low-value tasks, ensuring you don't get left behind in an evolving sales landscape.</p>
          </div>
        </div>

        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Providing Decision-Support Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Connect at the Right Time</h3>
              <p>By engaging early and thoughtfully, we help prospects recognize the value of your solution when they're most receptive.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Reduce Wasted Effort</h3>
              <p>Focus your team's energy on prospects who are truly interested, rather than spreading themselves thin on cold outreach.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Boost Team Morale and Productivity</h3>
              <p>Let your sales reps concentrate on closing deals, leading to higher job satisfaction and better results.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button className="bg-[#E51010] hover:bg-[#B30000] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DragonsLair;