import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Holiday closures — the banner auto-shows during each window and hides when we reopen.
  // To adjust later, just edit the dates/messages below.
  const CLOSURES = [
    { // Thanksgiving: closed Thu Nov 26 & Fri Nov 27, 2026
      showFrom: '2026-11-13T00:00:00', reopen: '2026-11-28T12:00:00',
      message: <>We will be <span style={{color:'#f87171'}}>closed Thu Nov 26 &amp; Fri Nov 27 for Thanksgiving</span> — back open Sat Nov 28. Happy Thanksgiving!</>,
    },
    { // Winter break: closed Mon Dec 7, 2026 — reopen Mon Jan 11, 2027
      showFrom: '2026-11-13T00:00:00', reopen: '2027-01-11T12:00:00',
      message: <>We will be <span style={{color:'#f87171'}}>closed for the winter Dec 7 – Jan 10</span> — back open Mon Jan 11 at 12PM. Happy Holidays!</>,
    },
  ];
  const activeClosures = CLOSURES.filter(c => new Date() >= new Date(c.showFrom) && new Date() < new Date(c.reopen));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Holiday closure banner(s) — auto-show/hide per the CLOSURES list above */}
      {activeClosures.length > 0 && (
        <div style={{background:'#1e3a5f', borderLeft:'6px solid #dc2626', textAlign:'center', padding:'10px 16px', fontSize:'14px', fontWeight:'700', color:'white'}}>
          {activeClosures.map((c, i) => (
            <div key={i} style={i > 0 ? {marginTop:'6px', paddingTop:'6px', borderTop:'1px solid rgba(255,255,255,0.25)'} : undefined}>{c.message}</div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="https://0201.nccdn.net/1_2/000/000/154/a0b/TheUpperDeckBattingRangeLOGO.PNG"
              alt="Upper Deck Batting Range Logo"
              className="h-16 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors duration-300 relative ${
                  location.pathname === link.path
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"></span>
                )}
              </Link>
            ))}
            <a href="tel:770-742-3246">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                770-742-3246
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'bg-red-50 text-red-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:770-742-3246" className="block">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                770-742-3246
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
