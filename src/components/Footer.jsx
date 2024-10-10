import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0097FD] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 ROCKET NOW. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-[#E51010]">Home</Link></li>
              <li><Link to="/contact" className="hover:text-[#E51010]">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-[#E51010]">Admin</Link></li>
            </ul>
          </nav>
        </div>
        <p className="mt-4 text-center">The best marketing agency near you, period.</p>
      </div>
    </footer>
  );
};

export default Footer;