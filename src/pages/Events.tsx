import React from "react";
import { Clock, MapPin } from "lucide-react";

// Import event images
import event1 from "@/assets/Events/event1.png";
import event2 from "@/assets/Events/event2.png";
import event3 from "@/assets/Events/event3.png";
import event4 from "@/assets/Events/event4.png";
import event5 from "@/assets/Events/event5.png";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
}

export default function Events() {
  const events: Event[] = [
    {
      id: 1,
      title: "Annual Conference 2023",
      date: "March 15, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "IIMM Jaipur Campus",
      image: event1,
      description:
        "The Annual Conference 2023 brought together industry leaders, academicians, and students to explore the latest trends in materials management. The event featured keynote speeches, panel discussions, and networking sessions that provided valuable insights into the future of supply chain management.",
    },
    {
      id: 2,
      title: "Industrial Visit to BHEL",
      date: "June 10, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "BHEL, Haridwar",
      image: event2,
      description:
        "Students had the unique opportunity to visit Bharat Heavy Electricals Limited's manufacturing facility. The visit included interactive sessions with industry experts, live demonstrations of supply chain operations, and insights into large-scale production management.",
    },
    {
      id: 3,
      title: "Workshop on Logistics",
      date: "October 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "IIMM Seminar Hall",
      image: event3,
      description:
        "This intensive workshop covered advanced logistics strategies, warehouse optimization, and transportation management. Participants engaged in hands-on exercises and case studies to develop practical skills in logistics management.",
    },
    {
      id: 4,
      title: "National Seminar 2024",
      date: "August 20, 2024",
      time: "9:30 AM - 6:00 PM",
      location: "Taj Hotel, Jaipur",
      image: event4,
      description:
        "The National Seminar 2024 focused on 'Innovations in Supply Chain Management' with industry experts sharing their experiences and research findings. The event facilitated knowledge exchange and networking among professionals from across the country.",
    },
    {
      id: 5,
      title: "Leadership Summit 2024",
      date: "November 10, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Le Meridien, Jaipur",
      image: event5,
      description:
        "The Leadership Summit brought together top executives and emerging leaders to discuss leadership challenges in materials management. The event featured inspiring keynotes, interactive workshops, and networking opportunities designed to develop leadership capabilities in the supply chain domain.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            IIMM Jaipur – Events & Activities
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At IIMM Jaipur, we believe in <span className="font-semibold text-blue-700">learning beyond the classroom</span>. 
            Our events connect students and professionals through conferences, workshops, and seminars that inspire innovation and excellence.
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="md:w-1/2 h-64 md:h-80 overflow-hidden relative group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-4 text-white text-sm font-semibold bg-blue-600 px-3 py-1 rounded-md shadow">
                  {event.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors duration-300">
                  {event.title}
                </h2>

                <div className="flex items-center text-gray-700 mb-2">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-700 mb-4">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span>{event.location}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {event.description}
                </p>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
