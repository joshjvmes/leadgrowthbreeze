import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const MagicalBeginnings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-blue-500 text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Magical Beginnings</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Prospecting the right customer is hard. Closing them is easy.</h2>
          <p className="mb-4">When your solution fixes a critical customer problem – the product sells itself.</p>
          <p className="mb-4">But finding those diamonds in the rough isn't easy.</p>
          <p className="mb-4">Reality is – 99% of your sales team's time is spent sifting through overwhelming amounts of information, only to end up chasing leads that go nowhere.</p>
          <p className="mb-4">No sales revenue for you, no commission check for them.</p>
          <p className="text-2xl font-bold">What if there was a better way?</p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Optimize Your Talent Resources to Do What They Do Best</h3>
          <p className="mb-4">Your sales reps thrive on building relationships and closing deals – not market research, cold outreach and data entry.</p>
          <p className="mb-4">Rocket closes the gap between you and scale with finely tuned humanized automation and growth hacking.</p>
          <p className="mb-4">Our AI Sales Development Representatives (SDRs) work around the clock to find and engage with prospects who are a perfect fit for your business—even before they realize it themselves. By tapping into social conversations and industry trends, we identify key moments when potential customers are open to solutions like yours.</p>
          <p className="mb-4">By taking the repetitive work off their plates, we let them focus on the parts of the job they love—and excel at.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Your AI SDRs</h3>
          <p className="mb-4">Imagine having a list of prospects who already know they need your solution. That's what we do—using AI to find your ideal customers and engage them in conversations about the problems you solve. No spam. No endless cold calls. Just real connections.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Why Customers Love Us</h3>
          <p className="italic">CUSTOMER QUOTES</p>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-bold mb-4">By partnering with us, you're not just automating tasks; you're supercharging your sales team.</h3>
          <p className="mb-6">Ready to transform complex buying journeys into business case studies?</p>
          <Link to="/contact">
            <Button className="bg-[#E51010] hover:bg-[#0097FD] text-white">
              Let's Chat
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MagicalBeginnings;