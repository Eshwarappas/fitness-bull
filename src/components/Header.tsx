
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { NAV_LINKS } from '../../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <div className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-possible-green' : 'text-white'}`}>
      FitBullz
    </div>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-text-primary hover:text-possible-green' : 'text-white hover:text-gray-200'}`}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button>Book Free Consultation</Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-text-primary' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-text-primary hover:text-white hover:bg-possible-green">
                {link.name}
              </a>
            ))}
            <div className="p-4">
              <Button className="w-full">Book Free Consultation</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
