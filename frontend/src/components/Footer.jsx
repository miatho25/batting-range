import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">UD</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Upper Deck</div>
                <div className="text-red-400 font-semibold text-sm">Batting Range</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Your premier destination for batting practice in Riverdale, GA. Featuring 10 covered cages and professional equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <a href="tel:770-742-3246" className="text-blue-200 hover:text-white transition-colors">
                  770-742-3246
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200">Riverdale, GA</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@upperdeckbattingrange.com" className="text-blue-200 hover:text-white transition-colors">
                  info@upperdeckbattingrange.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hours of Operation</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="text-blue-200">
                  <div className="font-semibold text-white">Monday - Saturday</div>
                  <div>12:00 PM - 8:00 PM</div>
                  <div className="font-semibold text-white mt-2">Sunday</div>
                  <div>12:00 PM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © {new Date().getFullYear()} Upper Deck Batting Range. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/pages/The-Upper-Deck-Batting-Range/167835749931828"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/upperdeckbattingrange/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
