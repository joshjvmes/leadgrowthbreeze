import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0097FD] text-white py-8">
      <div className="container mx-auto px-4">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-4">
            <li><Link to="/" className="hover:text-[#E51010]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#E51010]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#E51010]">Contact</Link></li>
            <li><Link to="/process" className="hover:text-[#E51010]">Process</Link></li>
            <li><Link to="/admin" className="hover:text-[#E51010]">Admin</Link></li>
          </ul>
        </nav>
        <div className="text-center">
          <p>&copy; 2014-2024 ROCKET NOW. All rights reserved.</p>
          <p className="mt-2">The best marketing agency near you, period.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;