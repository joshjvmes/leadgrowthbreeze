import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0097FD] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">ROCKET NOW</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-[#E51010]">Home</Link>
          <Link to="/contact" className="text-white hover:text-[#E51010]">Contact</Link>
          <Link to="/admin" className="text-white hover:text-[#E51010]">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;