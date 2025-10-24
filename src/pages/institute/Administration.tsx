import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home3.png";

export default function AdministrationPage() {
  const administrativeBodies = [
    {
      title: "National Council",
      description: "The supreme governing body that formulates policies and provides strategic direction to the institute.",
      responsibilities: [
        "Overall governance and policy formulation",
        "Financial oversight and budget approval",
        "Appointment of key office bearers",
        "Strategic planning and development"
      ]
    },
    {
      title: "Executive Committee",
      description: "Responsible for the day-to-day administration and implementation of council decisions.",
      responsibilities: [
        "Implementing policies and decisions of the National Council",
        "Managing administrative functions",
        "Overseeing academic and training programs",
        "Coordinating with regional branches"
      ]
    },
    {
      title: "Academic Council",
      description: "Oversees all academic matters including curriculum development and quality assurance.",
      responsibilities: [
        "Curriculum development and review",
        "Academic standards and quality assurance",
        "Research initiatives",
        "Faculty development programs"
      ]
    },
    {
      title: "Finance Committee",
      description: "Manages the financial affairs and ensures fiscal responsibility of the institute.",
      responsibilities: [
        "Budget preparation and monitoring",
        "Financial planning and management",
        "Investment decisions",
        "Financial reporting and compliance"
      ]
    }
  ];

  const keyOfficials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Director General",
      department: "Administration",
      email: "director@iimm.org",
      phone: "+91-22-2756 5741"
    },
    {
      name: "Ms. Priya Sharma",
      position: "Registrar",
      department: "Administration",
      email: "registrar@iimm.org",
      phone: "+91-22-2756 5742"
    },
    {
      name: "Mr. Amit Patel",
      position: "Finance Officer",
      department: "Finance",
      email: "finance@iimm.org",
      phone: "+91-22-2756 5743"
    },
    {
      name: "Dr. Neha Gupta",
      position: "Head of Academics",
      department: "Education",
      email: "academics@iimm.org",
      phone: "+91-22-2756 5744"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <InstituteHero
        title="Administration"
        subtitle="Ensuring Excellence in Materials Management Education"
        image={heroImage}
      />
      
      <div className="max-w-5xl mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">Administrative Structure</h2>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              The Indian Institute of Materials Management (IIMM) operates under a well-defined 
              administrative structure designed to ensure effective governance and smooth functioning 
              of all its activities. Our administrative framework is built on the principles of 
              transparency, accountability, and efficiency.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-primary">Governing Bodies</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {administrativeBodies.map((body, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-primary mb-2">{body.title}</h4>
                  <p className="text-gray-700 mb-3">{body.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {body.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mb-4 text-primary">Key Administrative Officials</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {keyOfficials.map((official, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-800">{official.name}</h4>
                  <p className="text-primary font-medium">{official.position}</p>
                  <p className="text-gray-600 text-sm mb-3">{official.department} Department</p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${official.email}`} className="text-blue-600 hover:underline">
                        {official.email}
                      </a>
                    </p>
                    <p className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${official.phone.replace(/\D/g, '')}`} className="text-gray-700">
                        {official.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Administrative Offices</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Head Office</h4>
                  <address className="not-italic text-gray-700">
                    IIMM House, Plot No. 102, Sector 15,<br />
                    CBD Belapur, Navi Mumbai - 400 614<br />
                    Maharashtra, India
                  </address>
                  <div className="mt-3 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">Phone:</span> +91-22-2756 5741 / 2756 5742
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span> info@iimm.org
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Website:</span> www.iimm.org
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Working Hours</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Monday to Friday: 9:30 AM - 6:00 PM</li>
                    <li>• Saturday: 10:00 AM - 2:00 PM</li>
                    <li>• Sunday: Closed</li>
                    <li>• Public Holidays: Closed</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">
                    For any administrative inquiries, please contact us during working hours or 
                    email us at <a href="mailto:admin@iimm.org" className="text-blue-600 hover:underline">admin@iimm.org</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Administrative Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Membership Services",
                  "Examination Department",
                  "Academic Records",
                  "Certification",
                  "Library Services",
                  "Student Support"
                ].map((service, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
