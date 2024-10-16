import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-[#0097FD] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src="/rocket-logo.png" alt="ROCKET NOW" className="h-8 w-auto sm:h-12" />
        </Link>
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-[#E51010] uppercase">HOME</Link></li>
              <li><Link to="/about" className="hover:text-[#E51010] uppercase">ABOUT</Link></li>
              <li><Link to="/process" className="hover:text-[#E51010] uppercase">PROCESS</Link></li>
              <li><Link to="/blog" className="hover:text-[#E51010] uppercase">BLOG</Link></li>
              <li><Link to="/admin" className="hover:text-[#E51010] uppercase">ADMIN</Link></li>
            </ul>
          </nav>
          <Link to="/contact">
            <Button className="bg-[#E51010] hover:bg-[#B30000] text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;