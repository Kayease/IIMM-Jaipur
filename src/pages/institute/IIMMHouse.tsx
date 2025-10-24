import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home3.png";

// Icons for facility cards
import { FaChalkboardTeacher, FaLaptopCode, FaBookOpen, FaUsers, FaUtensils, FaWifi, FaParking, FaWheelchair } from 'react-icons/fa';
import { MdOutlineMeetingRoom, MdOutlineBusinessCenter, MdOutlineCoffee } from 'react-icons/md';

export default function IIMMHousePage() {
  const facilities = [
    {
      name: "Conference Hall",
      icon: <MdOutlineMeetingRoom className="text-3xl text-primary mb-3" />,
      description: "State-of-the-art conference facility with modern audio-visual equipment, video conferencing capabilities, and ergonomic seating. Equipped with high-definition projectors, surround sound system, and simultaneous interpretation facilities.",
      capacity: "Up to 150 persons",
      features: ["High-speed WiFi", "Video conferencing", "Simultaneous interpretation", "Catering services"]
    },
    {
      name: "Seminar Rooms",
      icon: <FaChalkboardTeacher className="text-3xl text-primary mb-3" />,
      description: "Versatile seminar spaces designed for interactive learning experiences. Each room features smart boards, whiteboards, and flexible seating arrangements to accommodate different event formats.",
      capacity: "20-50 persons per room",
      features: ["Interactive whiteboards", "Flexible seating", "Natural lighting", "Breakout spaces"]
    },
    {
      name: "Research Library",
      icon: <FaBookOpen className="text-3xl text-primary mb-3" />,
      description: "Comprehensive collection of over 50,000 books, 200+ journals, and digital resources focused on materials management, supply chain, and related disciplines. Includes a dedicated digital resource center with access to leading business and academic databases.",
      capacity: "Reading room for 30 persons",
      features: ["Digital archives", "Quiet study zones", "Research assistance", "E-journal access"]
    },
    {
      name: "Technology Hub",
      icon: <FaLaptopCode className="text-3xl text-primary mb-3" />,
      description: "Modern computing facilities with high-speed internet access, specialized software for supply chain management, and data analytics tools. Includes a dedicated makerspace for prototyping and innovation projects.",
      capacity: "30 workstations + maker space",
      features: ["High-performance PCs", "Specialized software", "3D printing", "VR/VR equipment"]
    },
    {
      name: "Executive Center",
      icon: <MdOutlineBusinessCenter className="text-3xl text-primary mb-3" />,
      description: "Professional workspaces for IIMM staff, visiting faculty, and industry experts. Includes private offices, meeting rooms, and collaborative spaces designed to foster innovation and knowledge sharing.",
      capacity: "- ",
      features: ["Hot desks", "Meeting pods", "Business center", "Print/scan facilities"]
    },
    {
      name: "Café & Lounge",
      icon: <MdOutlineCoffee className="text-3xl text-primary mb-3" />,
      description: "A welcoming space for networking and informal discussions. Serves a variety of refreshments, snacks, and meals throughout the day.",
      capacity: "Seating for 40 persons",
      features: ["Coffee bar", "Healthy meal options", "Outdoor seating", "Free WiFi"]
    }
  ];

  const amenities = [
    { name: "High-Speed WiFi", icon: <FaWifi className="text-2xl" /> },
    { name: "Wheelchair Access", icon: <FaWheelchair className="text-2xl" /> },
    { name: "Ample Parking", icon: <FaParking className="text-2xl" /> },
    { name: "Cafeteria", icon: <FaUtensils className="text-2xl" /> },
    { name: "Prayer Room", icon: "🕌", label: "Prayer Room" },
    { name: "First Aid", icon: "🩹", label: "First Aid" },
    { name: "Security", icon: "👮", label: "24/7 Security" },
    { name: "Air Conditioning", icon: "❄️", label: "Central AC" }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <InstituteHero
        title="IIMM House"
        subtitle="Excellence in Materials Management Education & Professional Development"
        image={heroImage}
      />
      
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Welcome to IIMM House</h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              The premier destination for materials management education, research, and professional networking in India.
            </p>
          </div>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2 inline-block">Our Legacy</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
              <div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Established in 1975, IIMM House stands as a testament to our commitment to excellence in materials management education. 
                  Our state-of-the-art facility has been the cornerstone of professional development for thousands of supply chain and 
                  materials management professionals across India and beyond.
                </p>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Spanning over 50,000 square feet, our facility is designed to foster learning, collaboration, and innovation. 
                  Every aspect of IIMM House has been thoughtfully planned to create an environment that inspires excellence and 
                  facilitates professional growth.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 shadow-inner">
                <h3 className="text-xl font-semibold mb-4 text-primary">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <span>Established in 1975, serving professionals for over 45 years</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <span>50,000+ sq. ft. of modern learning space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <span>Hosts 200+ events annually, from workshops to international conferences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <span>Alumni network of 100,000+ professionals worldwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2 inline-block">Our Facilities</h2>
              <div className="text-sm text-gray-600 bg-blue-50 px-3 py-1.5 rounded-full">
                <span className="font-medium">Scroll right →</span> to explore all facilities
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {facilities.map((facility, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{facility.name}</h3>
                      <p className="text-gray-700 mb-4">{facility.description}</p>
                    </div>
                    {facility.icon}
                  </div>
                  
                  {facility.capacity && (
                    <div className="mt-auto">
                      <p className="text-sm font-medium text-gray-600 mb-3">
                        <span className="font-semibold">Capacity:</span> {facility.capacity}
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700">Key Features:</p>
                        <ul className="space-y-1.5">
                          {facility.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <span className="text-primary mr-2">✓</span> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Book Our Facilities</h3>
              <p className="mb-6 max-w-2xl">
                Looking for a professional venue for your next corporate event, workshop, or conference? 
                Our world-class facilities are available for external bookings.
              </p>
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                Enquire Now
              </button>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-2 inline-block">Location & Accessibility</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Getting Here</h3>
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                        By Air
                      </h4>
                      <p className="text-gray-700 ml-9">
                        Chhatrapati Shivaji Maharaj International Airport (BOM) is approximately 25 km away. 
                        Taxis and app-based cabs are readily available at the airport.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                        By Train
                      </h4>
                      <p className="text-gray-700 ml-9">
                        Nearest railway station is Belapur Railway Station (1.5 km). 
                        Regular local trains connect to Mumbai's suburban network.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                        By Road
                      </h4>
                      <p className="text-gray-700 ml-9">
                        Well-connected by Mumbai-Pune Expressway and Sion-Panvel Highway. 
                        Ample parking available on-site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Address</h4>
                        <p className="text-gray-700">Plot No. 102, Sector 15,</p>
                        <p className="text-gray-700">CBD Belapur, Navi Mumbai - 400 614</p>
                        <p className="text-gray-700">Maharashtra, India</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm mt-1 inline-block">
                          View on map →
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Contact</h4>
                        <p className="text-gray-700">+91-22-2756 5741 / 2756 5742</p>
                        <p className="text-gray-700">+91-22-2756 5743 (Fax)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Email</h4>
                        <a href="mailto:info@iimm.org" className="text-primary hover:underline">info@iimm.org</a>
                        <p className="text-sm text-gray-600 mt-1">General inquiries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary border-b-2 border-primary pb-2 inline-block">Amenities & Services</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {amenities.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm font-medium text-gray-700">{item.name}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <span className="font-medium">Accessibility Note:</span> Our facility is fully wheelchair accessible, with ramps, elevators, and accessible restrooms. Please inform us in advance if you require any special assistance during your visit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary border-b-2 border-primary pb-2 inline-block">Visiting Hours & Guidelines</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">Regular Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:30 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between text-gray-500">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">Library Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>10:00 AM - 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 1:30 PM</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">* Extended hours during examination periods</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">Holiday Schedule</h3>
                <p className="text-gray-700 mb-3">IIMM House remains closed on:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>National Holidays</li>
                  <li>Diwali (5 days)</li>
                  <li>Ganesh Chaturthi</li>
                  <li>Annual Maintenance (1st week of April)</li>
                </ul>
                <a href="#" className="text-primary text-sm font-medium mt-3 inline-block hover:underline">View full holiday list →</a>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Visitor Guidelines</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Appointments:</span> Prior appointment is required for meetings with specific officials. Please contact us in advance to schedule your visit.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Identification:</span> All visitors must present a valid photo ID at the reception upon arrival.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Parking:</span> Limited visitor parking is available on a first-come, first-served basis. Alternative parking is available at the nearby CBD parking complex.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <span className="font-medium">Security:</span> All visitors are subject to security screening. Prohibited items include weapons, hazardous materials, and large bags.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  <span className="font-medium">Note:</span> Due to the ongoing situation, we kindly request all visitors to follow COVID-19 safety protocols, including wearing masks and maintaining social distancing.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mt-16 bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Visit to IIMM House</h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Experience our world-class facilities and discover how we're shaping the future of materials management education.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                  Book a Tour
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
                  Contact Us
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                Have questions? Call us at +91-22-2756 5741 or email info@iimm.org
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
