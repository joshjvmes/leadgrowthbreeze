import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#0097FD] text-white py-8">
      <div className="container mx-auto px-4">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="hover:text-[#E51010] uppercase">HOME</Link></li>
            <li><Link to="/about" className="hover:text-[#E51010] uppercase">ABOUT</Link></li>
            <li><Link to="/process" className="hover:text-[#E51010] uppercase">PROCESS</Link></li>
            <li><Link to="/contact" className="hover:text-[#E51010] uppercase">CONTACT</Link></li>
            <li><Link to="/blog" className="hover:text-[#E51010] uppercase">BLOG</Link></li>
            <li><Link to="/admin" className="hover:text-[#E51010] uppercase">ADMIN</Link></li>
          </ul>
        </nav>
        
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