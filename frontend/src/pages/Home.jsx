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
  Phone,
  CheckCircle,
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
      title: '10 Covered Batting Cages',
      description: 'All-weather protection year-round',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Baseball: 25-85 MPH',
      description: 'Multiple speeds for all levels',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '3 Softball Cages',
      description: '2 slow pitch + 1 fast pitch',
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
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://0201.nccdn.net/1_2/000/000/0d2/3bb/inside2-1024x576.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/75"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            RIVERDALE'S #1 BATTING FACILITY
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            The Upper Deck Batting Range is <span className="text-red-500">Back on Deck</span>
          </h1>
          <p className="text-2xl md:text-3xl text-red-400 font-bold mb-4 animate-fade-in-delay">
            Come Practice Your Swing Today!
          </p>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Professional batting cages in Riverdale, GA • Baseball (25-85 mph) • Softball (2 slow pitch + 1 fast pitch) • 
            Perfect for all skill levels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-white text-sm font-semibold mb-1">MON-SAT</div>
              <div className="text-red-400 text-xl font-bold">12PM - 8PM</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-white text-sm font-semibold mb-1">SUNDAY</div>
              <div className="text-red-400 text-xl font-bold">12PM - 6PM</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBooking}
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              BOOK A CAGE NOW
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <a href="tel:770-742-3246">
              <Button className="bg-white hover:bg-gray-100 text-blue-900 text-xl px-10 py-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <Phone className="mr-2 w-6 h-6" />
                770-742-3246
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-red-600 font-bold text-xl mb-4 italic">Riverdale's Premier Batting Facility</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Perfect Your Swing at Atlanta's Best Batting Cages
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    <span className="font-bold">For Everyone:</span> Youth players, high school athletes, weekend warriors, and teams
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    <span className="font-bold">The Solution:</span> Improve your batting skills with baseball (25-85 mph) and softball cages (2 slow pitch, 1 fast pitch) in our covered, all-weather facility
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg">
                    <span className="font-bold">Why Us:</span> Family-owned since 2010, affordable rates, convenient location in Riverdale, GA
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Located in the heart of Riverdale, serving Atlanta's south side. Whether you're preparing for 
                tryouts, working on your technique, or just having fun with family and friends, we provide the 
                perfect environment to practice and improve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleBooking}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-lg"
                >
                  Reserve Your Cage
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a href="/services">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg rounded-lg">
                    View Pricing
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://customer-assets.emergentagent.com/job_bat-modern/artifacts/68yelvmh_image.png"
                  alt="Player swinging bat in cage"
                  className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://customer-assets.emergentagent.com/job_bat-modern/artifacts/mjwnpf98_image.png"
                  alt="Player batting"
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
