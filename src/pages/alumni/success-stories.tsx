import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

interface SuccessStory {
  id: number;
  name: string;
  batch: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  achievements: string[];
}

const pageTitle = 'Success Stories - IIMM Alumni';
const pageDescription = 'Read inspiring success stories from our distinguished alumni community who have made significant contributions to the field of materials management.';

const SuccessStoriesPage = () => {
  const successStories: SuccessStory[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      batch: 'Batch of 2010',
      position: 'Head of Supply Chain',
      company: 'Tata Steel',
      image: '/images/alumni/rajesh.jpg',
      quote: 'IIMM provided me with the foundation to excel in supply chain management. The practical knowledge I gained was invaluable.',
      achievements: [
        'Led a team of 50+ supply chain professionals',
        'Implemented cost-saving measures worth $5M annually',
        'Awarded Supply Chain Professional of the Year 2022'
      ]
    },
    {
      id: 2,
      name: 'Priya Sharma',
      batch: 'Batch of 2015',
      position: 'Procurement Manager',
      company: 'Adani Group',
      image: '/images/alumni/priya.jpg',
      quote: 'The industry exposure and mentorship at IIMM shaped my career in procurement and strategic sourcing.',
      achievements: [
        'Reduced procurement costs by 18% in first year',
        'Established sustainable sourcing practices',
        'Mentor to young professionals in procurement'
      ]
    },
    {
      id: 3,
      name: 'Amit Patel',
      batch: 'Batch of 2018',
      position: 'Logistics Director',
      company: 'Amazon India',
      image: '/images/alumni/amit.jpg',
      quote: 'IIMM\'s focus on practical learning gave me the confidence to take on leadership roles early in my career.',
      achievements: [
        'Reduced delivery times by 30%',
        'Led expansion into 3 new markets',
        'Recognized as Emerging Leader in Logistics 2023'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">{pageDescription}</p>
        </div>
      </div>

      {/* Success Stories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((alumni) => (
            <div key={alumni.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <GraduationCap className="w-20 h-20 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{alumni.name}</h3>
                    <p className="text-gray-600">{alumni.batch}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 mb-4">
                  <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                  <span>{alumni.position} at {alumni.company}</span>
                </div>
                <blockquote className="text-gray-600 italic mb-4 border-l-4 border-green-500 pl-4">
                  "{alumni.quote}"
                </blockquote>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {alumni.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Success Story</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Are you an IIMM alumnus with an inspiring journey? We'd love to feature your story and inspire the next generation of materials management professionals.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Share Your Story
          </button>
        </div>
      </div>
      
      {/* Back to Alumni Home */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/alumni" className="inline-flex items-center text-blue-600 hover:underline">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Alumni Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
