import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#0097FD] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Call to Action Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Growth?</h3>
          <Link to="/contact">
            <Button className="bg-[#E51010] hover:bg-[#B30000] text-white font-bold py-2 px-6 rounded-full text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
        
        <div className="text-center">
          <p>&copy; 2014-2024 ROCKET NOW. All rights reserved.</p>
          <p className="mt-2">The best marketing agency near you, period.</p>
          <Link to="/magical-beginnings" className="block mt-4 hover:text-[#E51010]">
            Magical Beginnings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;