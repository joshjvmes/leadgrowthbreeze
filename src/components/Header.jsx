import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0097FD]/95 backdrop-blur-sm shadow-lg py-2' : 'bg-[#0097FD] py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
          <img src="/rocket-logo.png" alt="ROCKET NOW" className="h-8 w-auto sm:h-12" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              {['HOME', 'ABOUT', 'PROCESS', 'PROVE IT', 'BLOG', 'ADMIN'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item === 'HOME' ? '' : item.toLowerCase().replace(' ', '-')}`}
                    className="relative text-white hover:text-[#E51010] transition-colors duration-300 uppercase font-medium tracking-wide
                      after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
                      after:bg-[#E51010] after:origin-bottom-right after:transition-transform after:duration-300 
                      hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/contact">
            <Button className="bg-[#E51010] hover:bg-[#B30000] text-white font-bold transition-all duration-300 
              hover:scale-105 hover:shadow-lg shadow-md">
              GET STARTED
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden text-white p-2 hover:bg-[#0085E6] rounded-lg transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <nav className="container mx-auto px-4 py-4 bg-[#0097FD]/95 backdrop-blur-sm">
          <ul className="flex flex-col space-y-4">
            {['HOME', 'ABOUT', 'PROCESS', 'PROVE IT', 'BLOG', 'ADMIN'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === 'HOME' ? '' : item.toLowerCase().replace(' ', '-')}`}
                  className="block text-white hover:text-[#E51010] transition-colors duration-300 uppercase font-medium"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                <Button className="w-full bg-[#E51010] hover:bg-[#B30000] text-white font-bold transition-all duration-300">
                  GET STARTED
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;