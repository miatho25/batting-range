import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Target,
  Zap,
  Users,
  Trophy,
  Calendar,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
  PartyPopper,
  GraduationCap,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Individual Practice Sessions',
      description: 'Perfect for personal skill development and technique improvement',
      features: ['Pay per session or buy token packages', 'Baseball: 25-85 mph speeds available', 'Softball: 2 slow pitch + 1 fast pitch', 'Drop-in anytime during open hours', 'Great for all skill levels'],
      price: 'Starting at $5',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Rentals & Group Practice',
      description: 'Ideal for baseball and softball teams to practice together',
      features: ['Reserve multiple cages', 'Perfect for team training', 'Flexible scheduling', 'Group discount rates'],
      price: 'From $75/hour',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Private Coaching & Training',
      description: 'One-on-one instruction to take your game to the next level',
      features: ['Experienced coaches', 'Personalized training plans', 'Video analysis available', 'Book by appointment'],
      price: 'Call for rates',
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: 'Birthday Parties & Events',
      description: 'Make your celebration unforgettable with a batting cage party',
      features: ['Private cage reservations', 'Party packages available', 'Fun for all ages', 'Convenient party space'],
      price: 'Custom packages',
    },
  ];

  const pricingOptions = [
    {
      title: 'Single Session',
      price: '$5',
      unit: 'per session',
      description: 'Perfect for trying us out',
      features: [
        '50 pitches per session',
        'Baseball: 25-85 mph',
        'Softball: slow or fast pitch',
        'Walk-ins welcome',
        'No membership required',
        'Pay as you go',
      ],
      cta: 'Drop In Today',
    },
    {
      title: 'Token Package',
      price: '$35',
      unit: '10 sessions',
      description: 'Best value for regular practice',
      features: [
        '500 total pitches',
        'Save $15 vs single sessions',
        'Tokens never expire',
        'Shareable with family',
        '🔥 Best token package',
      ],
      popular: true,
      cta: 'Buy Package',
    },
    {
      title: 'Team Rental',
      price: '$75',
      unit: 'per hour',
      description: 'Great for team practice',
      features: [
        '2 batting cages included',
        'Perfect for team training',
        'Reserve in advance',
        'Flexible time slots',
        'Additional cages available',
      ],
      cta: 'Book Team Session',
    },
  ];

  const handleBooking = () => {
    window.open('https://squareup.com/appointments/book/Z11HXQVQ0SYPS/upper-deck-batting-range-riverdale-ga', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://0201.nccdn.net/1_2/000/000/0d2/3bb/inside2-1024x576.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-700/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            BATTING CAGES IN RIVERDALE, GA
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Batting Cages & Training</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Professional baseball and softball batting cages near Atlanta • Baseball: 25-85 mph • Softball: 2 slow pitch + 1 fast pitch • All skill levels welcome
          </p>
          <Button
            onClick={handleBooking}
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-6 rounded-lg transform hover:scale-105 transition-all duration-300"
          >
            Book a Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              From individual practice to team training and special events - we've got you covered
            </p>
          </div>
          
          {/* Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <img
              src="https://0201.nccdn.net/1_2/000/000/153/76b/IMG_0355-2816x2112.jpg"
              alt="Upper Deck batting cages"
              className="rounded-lg shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://0201.nccdn.net/4_2/000/000/03f/ac7/IMG_0343-2816x2112.jpg"
              alt="Player in batting cage"
              className="rounded-lg shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://0201.nccdn.net/4_2/000/000/000/dd3/IMG_0413-2816x2112.jpg"
              alt="Batting practice"
              className="rounded-lg shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-900 text-2xl">{service.title}</h3>
                  <span className="text-red-600 font-bold text-lg">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing & Packages</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Affordable rates for batting practice in Riverdale • Pay per session or save with packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingOptions.map((option, index) => (
              <Card
                key={index}
                className={`p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                  option.popular
                    ? 'border-4 border-red-600 shadow-2xl scale-105 bg-white'
                    : 'border-2 border-gray-200 shadow-lg hover:shadow-2xl bg-white'
                }`}
              >
                {option.popular && (
                  <div className="bg-red-600 text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-4">
                    🔥 MOST POPULAR
                  </div>
                )}
                <h3 className="font-bold text-gray-900 text-2xl mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-blue-900">{option.price}</span>
                  <span className="text-gray-600 ml-2 text-lg">/ {option.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleBooking}
                  className={`w-full py-6 text-lg font-bold ${
                    option.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                  }`}
                >
                  {option.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Pricing Info */}
          <Card className="p-8 bg-blue-50 border-2 border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">Baseball Cages</h4>
                <p className="text-gray-600">25-85 mph for all skill levels</p>
              </div>
              <div>
                <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">3 Softball Cages</h4>
                <p className="text-gray-600">2 slow pitch + 1 fast pitch</p>
              </div>
              <div>
                <Trophy className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">10 Total Cages</h4>
                <p className="text-gray-600">All covered for year-round use</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white border-none shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-16 h-16" />
            </div>
            <h2 className="text-4xl font-bold text-center mb-8">Hours of Operation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Monday - Saturday</h3>
                <p className="text-3xl text-blue-100">12:00 PM - 8:00 PM</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3">Sunday</h3>
                <p className="text-3xl text-blue-100">12:00 PM - 6:00 PM</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-blue-200 text-lg mb-4">📍 Located in Riverdale, GA - Easy access from Atlanta, College Park, and Clayton County</p>
              <p className="text-white font-semibold text-xl">Open 7 days a week for your convenience!</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Improve Your Swing?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Book your batting cage session at Riverdale's premier baseball training facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBooking}
              className="bg-white hover:bg-gray-100 text-red-600 text-xl px-10 py-6 rounded-lg transform hover:scale-105 transition-all duration-300 font-bold"
            >
              Book a Cage Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <a href="tel:770-742-3246">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white text-xl px-10 py-6 rounded-lg transform hover:scale-105 transition-all duration-300 font-bold">
                Call: 770-742-3246
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
