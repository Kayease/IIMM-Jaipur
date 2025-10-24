import InstituteHero  from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home2.png";

const chapters = [
  {
    region: "Northern Region",
    branches: [
      { name: "Delhi", established: 1972, members: 1250, contact: "delhi@iimm.org" },
      { name: "Chandigarh", established: 1980, members: 450, contact: "chandigarh@iimm.org" },
      { name: "Jaipur", established: 1978, members: 520, contact: "jaipur@iimm.org" },
      { name: "Lucknow", established: 1982, members: 380, contact: "lucknow@iimm.org" },
      { name: "Dehradun", established: 1990, members: 280, contact: "dehradun@iimm.org" },
      { name: "Amritsar", established: 1985, members: 210, contact: "amritsar@iimm.org" }
    ]
  },
  {
    region: "Southern Region",
    branches: [
      { name: "Bangalore", established: 1975, members: 980, contact: "bangalore@iimm.org" },
      { name: "Chennai", established: 1973, members: 870, contact: "chennai@iimm.org" },
      { name: "Hyderabad", established: 1976, members: 650, contact: "hyderabad@iimm.org" },
      { name: "Cochin", established: 1983, members: 420, contact: "cochin@iimm.org" },
      { name: "Vizag", established: 1987, members: 380, contact: "vizag@iimm.org" },
      { name: "Coimbatore", established: 1992, members: 310, contact: "coimbatore@iimm.org" }
    ]
  },
  {
    region: "Eastern Region",
    branches: [
      { name: "Kolkata", established: 1972, members: 1100, contact: "kolkata@iimm.org" },
      { name: "Bhubaneswar", established: 1981, members: 490, contact: "bhubaneswar@iimm.org" },
      { name: "Guwahati", established: 1986, members: 320, contact: "guwahati@iimm.org" },
      { name: "Patna", established: 1984, members: 410, contact: "patna@iimm.org" },
      { name: "Ranchi", established: 1988, members: 290, contact: "ranchi@iimm.org" },
      { name: "Bhilai", established: 1991, members: 260, contact: "bhilai@iimm.org" }
    ]
  },
  {
    region: "Western Region",
    branches: [
      { name: "Mumbai", established: 1972, members: 1500, contact: "mumbai@iimm.org" },
      { name: "Pune", established: 1974, members: 920, contact: "pune@iimm.org" },
      { name: "Ahmedabad", established: 1977, members: 680, contact: "ahmedabad@iimm.org" },
      { name: "Indore", established: 1982, members: 410, contact: "indore@iimm.org" },
      { name: "Nagpur", established: 1980, members: 390, contact: "nagpur@iimm.org" },
      { name: "Goa", established: 1993, members: 180, contact: "goa@iimm.org" }
    ]
  }
];

const upcomingEvents = [
  {
    title: "National Materials Management Conference 2023",
    date: "15-17 November 2023",
    location: "Hyderabad International Convention Centre",
    description: "Annual conference focusing on emerging trends in supply chain and materials management"
  },
  {
    title: "Workshop on Digital Transformation in SCM",
    date: "2-3 December 2023",
    location: "Mumbai, Delhi, Bangalore (Simulcast)",
    description: "Hands-on workshop on implementing digital technologies in supply chain management"
  },
  {
    title: "Regional Chapter Meet - North Zone",
    date: "10 December 2023",
    location: "The Leela Ambience, Delhi",
    description: "Networking and knowledge sharing session for Northern region members"
  }
];

const benefits = {
  professionals: [
    {
      title: "Professional Development",
      icon: "🎯",
      items: [
        "Access to certification programs",
        "Skill enhancement workshops",
        "Leadership development programs"
      ]
    },
    {
      title: "Networking",
      icon: "🤝",
      items: [
        "Connect with 10,000+ professionals",
        "Regional and national events",
        "Online community platform"
      ]
    },
    {
      title: "Knowledge Sharing",
      icon: "📚",
      items: [
        "Research publications",
        "Case studies and white papers",
        "Quarterly industry insights"
      ]
    },
    {
      title: "Career Growth",
      icon: "📈",
      items: [
        "Job portal access",
        "Mentorship programs",
        "Career counseling services"
      ]
    }
  ],
  organizations: [
    {
      title: "Talent Pipeline",
      icon: "👥",
      items: [
        "Access to skilled professionals",
        "Campus recruitment drives",
        "Internship programs"
      ]
    },
    {
      title: "Industry Collaboration",
      icon: "🏢",
      items: [
        "Research partnerships",
        "Custom training solutions",
        "Consulting services"
      ]
    },
    {
      title: "Best Practices",
      icon: "🏆",
      items: [
        "Benchmarking studies",
        "Industry standards development",
        "Process optimization"
      ]
    },
    {
      title: "Thought Leadership",
      icon: "💡",
      items: [
        "Speaking opportunities",
        "Industry recognition",
        "Advisory board participation"
      ]
    }
  ]
};

export default function NetworkPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <InstituteHero
        title="IIMM Network"
        subtitle="A Pan-India Community of Materials Management Professionals"
        image={heroImage}
      />
      
      <div className="max-w-7xl mx-auto mt-12">
        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Our National Presence</h2>
            <p className="text-lg text-gray-700 mb-8">
              With over 50 years of excellence, the Indian Institute of Materials Management has built a robust 
              network of 56+ chapters across India, connecting more than 25,000 professionals in the field of 
              materials and supply chain management. Our pan-India presence ensures that members have access 
              to local resources while being part of a national professional community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">56+</div>
                <div className="text-sm text-gray-600">Chapters</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">25K+</div>
                <div className="text-sm text-gray-600">Members</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-gray-600">Annual Events</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-gray-600">Regions</div>
              </div>
            </div>
          </div>
          
          {/* Regional Chapters */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Our Network Across India</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chapters.map((chapter, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      {chapter.region[0]}
                    </span>
                    {chapter.region}
                  </h3>
                  <div className="space-y-4">
                    {chapter.branches.map((branch, idx) => (
                      <div key={idx} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{branch.name} Chapter</h4>
                            <p className="text-sm text-gray-500">Est. {branch.established} • {branch.members}+ Members</p>
                          </div>
                          <a 
                            href={`mailto:${branch.contact}`}
                            className="text-primary hover:text-primary/80 text-sm font-medium"
                            title="Contact Chapter"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="text-sm font-medium text-primary mb-2">{event.date}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-3">📍 {event.location}</p>
                <p className="text-sm text-gray-700">{event.description}</p>
                <button className="mt-4 text-sm font-medium text-primary hover:text-primary/80 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a 
              href="/events" 
              className="inline-flex items-center text-primary font-medium hover:text-primary/80"
            >
              View All Events
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Join the IIMM Network?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">For Professionals</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.professionals.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">{benefit.title}</h4>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {benefit.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">For Organizations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.organizations.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">{benefit.title}</h4>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {benefit.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-primary to-primary/90 rounded-xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Expand Your Professional Network?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join over 25,000 materials and supply chain professionals who are advancing their careers 
                and shaping the future of the industry through the IIMM network.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/membership" 
                  className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Become a Member
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Our Team
                </a>
              </div>
              <p className="mt-4 text-sm text-white/80">
                Have questions? Email us at <a href="mailto:membership@iimm.org" className="text-white underline">membership@iimm.org</a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-primary mb-8">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "IIMM's network has been instrumental in my professional growth. The learning opportunities and industry connections are unparalleled.",
                author: "Rajesh Mehta",
                role: "Head of Supply Chain, Tata Motors",
                chapter: "Mumbai Chapter"
              },
              {
                quote: "Being part of IIMM has given me access to a wealth of knowledge and a network that spans across industries and geographies.",
                author: "Priya Sharma",
                role: "Procurement Manager, Infosys",
                chapter: "Bangalore Chapter"
              },
              {
                quote: "The local chapter activities combined with national events provide the perfect platform for continuous learning and networking.",
                author: "Amit Patel",
                role: "Materials Manager, L&T Construction",
                chapter: "Ahmedabad Chapter"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.chapter}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
