import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#0097FD] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <img src="/Rocket_icon_white.png" alt="ROCKET NOW" className="h-16 w-auto mb-4 md:mb-0" />
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><Link to="/magical-beginnings" className="hover:text-[#E51010] transition-colors">Magical Beginnings</Link></li>
              <li><Link to="/enchanted-forest" className="hover:text-[#E51010] transition-colors">Enchanted Forest</Link></li>
              <li><Link to="/dragons-lair" className="hover:text-[#E51010] transition-colors">Dragon's Lair</Link></li>
              <li><Link to="/celestial-realm" className="hover:text-[#E51010] transition-colors">Celestial Realm</Link></li>
            </ul>
          </nav>
        </div>
        
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;