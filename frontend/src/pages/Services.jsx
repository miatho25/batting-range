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
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: '10 Covered Batting Cages',
      description: 'All-weather covered cages for baseball and softball practice',
      features: ['Professional equipment', 'Well-maintained facilities', 'Safe environment'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Multiple Speed Options',
      description: '10 different batting speeds to match your skill level',
      features: ['Beginner speeds (35-45 mph)', 'Intermediate (45-60 mph)', 'Advanced (60-70 mph)'],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Rentals',
      description: 'Perfect for team practice sessions and group training',
      features: ['Multiple cage bookings', 'Flexible scheduling', 'Group discounts available'],
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Individual Practice',
      description: 'Drop-in sessions for individual skill development',
      features: ['Pay-per-session options', 'No membership required', 'Walk-ins welcome'],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Online Booking',
      description: 'Reserve your cage time in advance',
      features: ['Easy online scheduling', 'Real-time availability', 'Instant confirmation'],
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Flexible Pricing',
      description: 'Competitive rates and payment options',
      features: ['Hourly rates', 'Token packages', 'Multiple payment methods'],
    },
  ];

  const pricingOptions = [
    {
      title: 'Single Session',
      price: '$5',
      unit: 'per session',
      features: ['40 pitches', 'Any speed setting', 'Walk-in friendly', 'No commitment'],
    },
    {
      title: 'Token Package',
      price: '$40',
      unit: '10 sessions',
      features: ['400 total pitches', 'Save $10', 'Never expires', 'Shareable'],
      popular: true,
    },
    {
      title: 'Team Rental',
      price: '$75',
      unit: 'per hour',
      features: ['2 cages included', 'Perfect for teams', 'Flexible booking', 'Group training'],
    },
  ];

  const handleBooking = () => {
    window.open('https://squareup.com/appointments/book/Z11HXQVQ0SYPS/upper-deck-batting-range-riverdale-ga', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Professional batting cage facilities with everything you need to improve your game
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need for an exceptional batting practice experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none bg-white shadow-md"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing Options</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the option that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card
                key={index}
                className={`p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                  option.popular
                    ? 'border-2 border-red-600 shadow-2xl scale-105'
                    : 'border-none shadow-md hover:shadow-xl'
                }`}
              >
                {option.popular && (
                  <div className="bg-red-600 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-bold text-gray-900 text-2xl mb-2">{option.title}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-blue-900">{option.price}</span>
                  <span className="text-gray-600 ml-2">{option.unit}</span>
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
                  className={`w-full py-6 text-lg ${
                    option.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                  }`}
                >
                  Book Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white border-none">
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-16 h-16" />
            </div>
            <h2 className="text-4xl font-bold text-center mb-8">Hours of Operation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold mb-3">Monday - Saturday</h3>
                <p className="text-3xl text-blue-100">12:00 PM - 8:00 PM</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Sunday</h3>
                <p className="text-3xl text-blue-100">12:00 PM - 6:00 PM</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-blue-200">Open 7 days a week for your convenience!</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Practice Your Swing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book your batting cage session today and experience the difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBooking}
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-lg"
            >
              Book A Cage Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:770-742-3246">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-lg">
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
