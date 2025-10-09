import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Calendar, Briefcase, Network } from 'lucide-react';

// Page metadata can be managed through a layout or context in React Router
const pageTitle = 'Alumni Network - IIMM';
const pageDescription = 'Connect with IIMM alumni, explore success stories, and join our growing network of materials management professionals.';

const AlumniPage = () => {
  const features = [
    {
      title: 'Alumni Network',
      description: 'Connect with fellow IIMM graduates across the globe and expand your professional network.',
      icon: <Network className="w-10 h-10 text-blue-600" />,
      link: '/alumni/network'
    },
    {
      title: 'Success Stories',
      description: 'Be inspired by the achievements of our distinguished alumni in the field of materials management.',
      icon: <GraduationCap className="w-10 h-10 text-green-600" />,
      link: '/alumni/success-stories'
    },
    {
      title: 'Mentorship Program',
      description: 'Guide the next generation of materials management professionals through our mentorship program.',
      icon: <Users className="w-10 h-10 text-purple-600" />,
      link: '/alumni/mentorship'
    },
    {
      title: 'Alumni Events',
      description: 'Stay updated on upcoming alumni events, reunions, and professional development opportunities.',
      icon: <Calendar className="w-10 h-10 text-orange-500" />,
      link: '/alumni/events'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IIMM Alumni Network</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Connecting professionals, fostering growth, and building lasting relationships</p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link 
              to={feature.link} 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <span className="mt-auto text-blue-600 font-medium hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Join our alumni community to access exclusive resources, job opportunities, and professional development events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/alumni/network" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Join the Network
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Update Your Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
