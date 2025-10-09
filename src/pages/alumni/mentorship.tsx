import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, UserCheck, Clock, Award } from 'lucide-react';

const MentorshipPage = () => {
  const benefits = [
    {
      title: 'Career Guidance',
      description: 'Get one-on-one career advice from experienced professionals in your field of interest.',
      icon: <UserCheck className="w-10 h-10 text-blue-600" />
    },
    {
      title: 'Networking',
      description: 'Connect with industry leaders and expand your professional network.',
      icon: <Users className="w-10 h-10 text-green-600" />
    },
    {
      title: 'Skill Development',
      description: 'Enhance your skills through personalized guidance and feedback.',
      icon: <Award className="w-10 h-10 text-purple-600" />
    },
    {
      title: 'Long-term Support',
      description: 'Build lasting relationships with mentors who can guide you throughout your career.',
      icon: <Clock className="w-10 h-10 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Mentorship Program</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Connect with experienced alumni mentors and accelerate your professional growth</p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-opacity-20 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="border-l-2 border-purple-600 absolute h-full left-4 md:left-1/2 -ml-2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    step: '1',
                    title: 'Sign Up',
                    description: 'Complete the mentorship application form with your details and areas of interest.'
                  },
                  {
                    step: '2',
                    title: 'Get Matched',
                    description: 'Our team will match you with a suitable mentor based on your profile and goals.'
                  },
                  {
                    step: '3',
                    title: 'Start Mentoring',
                    description: 'Connect with your mentor and begin your professional development journey.'
                  },
                  {
                    step: '4',
                    title: 'Grow Together',
                    description: 'Regularly meet with your mentor, set goals, and track your progress.'
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-12 md:pl-0 md:flex items-center">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold z-10">
                        {item.step}
                      </div>
                      <div className="md:hidden ml-4">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block md:flex-1 md:px-8">
                      {index % 2 === 0 ? (
                        <div className="text-right pr-8">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ) : (
                        <div className="pl-8">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our mentorship program and take the next step in your professional journey with guidance from experienced IIMM alumni.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/alumni/mentorship/apply" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Apply as a Mentee
              </Link>
              <Link 
                to="/alumni/mentorship/become-mentor" 
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                Become a Mentor
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Alumni Home */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/alumni" className="inline-flex items-center text-purple-600 hover:underline">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Alumni Home
        </Link>
      </div>
    </div>
  );
};

export default MentorshipPage;
