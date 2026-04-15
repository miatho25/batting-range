import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Target,
  Users,
  Shield,
  Clock,
  DollarSign,
  Award,
  Zap,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Competitive Service Rates',
      description: 'Affordable pricing for all skill levels',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Excellent Customer Service',
      description: 'Friendly staff ready to help',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Features Covered Batting Cages',
      description: 'All-weather protection',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Has 10 Batting Speeds',
      description: 'From beginner to pro levels',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Licensed, Bonded, and Insured',
      description: 'Your safety is our priority',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Locally Owned Business',
      description: 'Proud to serve our community',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Open 7 Days a Week',
      description: 'Convenient hours for everyone',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Convenient Payment Options',
      description: 'Multiple payment methods accepted',
    },
  ];

  const handleBooking = () => {
    window.open('https://squareup.com/appointments/book/Z11HXQVQ0SYPS/upper-deck-batting-range-riverdale-ga', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://0201.nccdn.net/1_2/000/000/0d2/3bb/inside2-1024x576.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            The Upper Deck Batting Range is <span className="text-red-500">Back on Deck</span>
          </h1>
          <p className="text-2xl md:text-3xl text-red-400 font-bold mb-8 animate-fade-in-delay">
            Come Practice Your Swing Today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-white">
              <div className="text-xl font-semibold">MON-SAT 12-8</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="text-white">
              <div className="text-xl font-semibold">SUN 12-6</div>
            </div>
          </div>
          <Button
            onClick={handleBooking}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            BOOK A CAGE NOW
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-red-600 font-bold text-xl mb-4 italic">The Go-To Batting Range</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Enjoy Our 10 Covered Batting Cages
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Are you looking for a batting range in Riverdale, GA? Search no further than The Upper Deck
                Batting Range. Enjoy your well-loved sports while spending a wonderful time with your family
                and friends.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The facility provides 10 covered batting cages that will bring out the softball and baseball
                enthusiast in you. For your convenience, we also have concessions that you will absolutely
                love.
              </p>
              <Button
                onClick={handleBooking}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-lg"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://customer-assets.emergentagent.com/job_bat-modern/artifacts/vrbpmude_image.png"
                  alt="Player in batting cage"
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://0201.nccdn.net/4_2/000/000/000/dd3/IMG_0413-2816x2112.jpg"
                  alt="Baseball player"
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose The Upper Deck Batting Range?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to providing the best batting experience in Riverdale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none bg-white"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Head to The Upper Deck Batting Range Today!
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            The Upper Deck Batting Range is passionate about providing our clients with a place where they
            can just let loose and have fun with their family, friends, and teammates. The staff at the
            range are always working on improving our facility. Expect better services and entertainment
            each time you come back to the batting range.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBooking}
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-lg"
            >
              Book Your Cage Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a href="tel:770-742-3246">
              <Button className="bg-white hover:bg-gray-100 text-blue-900 text-lg px-8 py-6 rounded-lg">
                Call Us: 770-742-3246
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
