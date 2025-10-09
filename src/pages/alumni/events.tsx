import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'conference' | 'workshop' | 'reunion' | 'webinar';
  description: string;
  image: string;
  isUpcoming: boolean;
  registrationLink?: string;
}

// Page metadata can be managed through a layout or context in React Router
const pageTitle = 'Alumni Events - IIMM';
const pageDescription = 'Upcoming alumni events, reunions, and professional development opportunities organized by IIMM.';

const EventsPage = () => {
  const events: Event[] = [
    {
      id: 1,
      title: 'Annual Alumni Meet 2023',
      date: 'December 15, 2023',
      time: '6:00 PM - 10:00 PM',
      location: 'Taj Lands End, Mumbai',
      type: 'reunion',
      description: 'Join us for an evening of nostalgia and networking as we bring together IIMM alumni from across batches. Special keynote by our distinguished alumnus, Mr. Ramesh Agarwal, CEO of SupplyChain Solutions Inc.',
      image: '/images/events/alumni-meet.jpg',
      isUpcoming: true,
      registrationLink: '#'
    },
    {
      id: 2,
      title: 'Supply Chain Innovation Summit',
      date: 'January 20, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Online',
      type: 'conference',
      description: 'A day-long virtual conference featuring industry leaders discussing the latest trends and innovations in supply chain management. Exclusive panel discussion on sustainable supply chains.',
      image: '/images/events/supply-chain-summit.jpg',
      isUpcoming: true,
      registrationLink: '#'
    },
    {
      id: 3,
      title: 'Leadership in Procurement Workshop',
      date: 'November 10, 2023',
      time: '2:00 PM - 6:00 PM',
      location: 'IIMM Campus, Mumbai',
      type: 'workshop',
      description: 'Interactive workshop focusing on developing leadership skills for procurement professionals. Limited seats available for alumni.',
      image: '/images/events/procurement-workshop.jpg',
      isUpcoming: false,
      registrationLink: '#'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-100 text-blue-800';
      case 'workshop':
        return 'bg-purple-100 text-purple-800';
      case 'reunion':
        return 'bg-green-100 text-green-800';
      case 'webinar':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Stay connected through our exclusive alumni events and professional development opportunities</p>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events
            .filter(event => event.isUpcoming)
            .map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Calendar className="w-20 h-20 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    {event.isUpcoming && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Upcoming
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  
                  <div className="space-y-3 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-indigo-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
                  
                  {event.isUpcoming && event.registrationLink && (
                    <Link 
                      to={event.registrationLink || '#'}
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                    >
                      Register Now <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Past Events Section */}
        <h2 className="text-3xl font-bold mb-8 text-center">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .filter(event => !event.isUpcoming)
            .map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Calendar className="w-20 h-20 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
                  
                  <Link 
                    to="#"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    View Photos <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Host an Event</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Interested in organizing an event for IIMM alumni? We'd love to help you connect with your batchmates and the broader alumni community.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Propose an Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
