import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";

const boardMembers = [
  {
    name: "Prof. Anil Sharma",
    designation: "Chairperson",
    qualification: "Ph.D. in Supply Chain Management, IIM Ahmedabad",
    expertise: "Supply Chain Strategy, Logistics, and Operations",
    experience: "25+ years in academia and industry",
    currentRole: "Professor & Dean, School of Management, IIT Delhi"
  },
  {
    name: "Dr. Meena Kapoor",
    designation: "Academic Member",
    qualification: "Ph.D. in Operations Management, IIT Bombay",
    expertise: "Operations Research, Inventory Control, Lean Management",
    experience: "20 years in operations management education",
    currentRole: "Professor, Operations Management, NITIE Mumbai"
  },
  {
    name: "Prof. Rajiv Malhotra",
    designation: "Academic Member",
    qualification: "Ph.D. in Materials Management, IIT Kharagpur",
    expertise: "Strategic Sourcing, Vendor Development, Procurement",
    experience: "22 years in materials management education",
    currentRole: "Head, Department of Management Studies, IIFT Delhi"
  },
  {
    name: "Dr. Sunita Patel",
    designation: "Academic Member",
    qualification: "Ph.D. in Business Analytics, IIM Bangalore",
    expertise: "Data Analytics, Business Intelligence, Decision Sciences",
    experience: "18 years in analytics education and consulting",
    currentRole: "Professor, Business Analytics, SPJIMR Mumbai"
  },
  {
    name: "Mr. Vikram Singh",
    designation: "Industry Expert",
    qualification: "MBA (Operations), IIM Calcutta | PMP, PMI",
    expertise: "Project Management, Supply Chain Transformation",
    experience: "23 years in supply chain consulting",
    currentRole: "Vice President - Supply Chain, Reliance Industries"
  },
  {
    name: "Ms. Priyanka Reddy",
    designation: "Industry Expert",
    qualification: "M.Tech (Industrial Engineering), IIT Delhi",
    expertise: "Digital Supply Chain, Industry 4.0, Automation",
    experience: "15 years in digital transformation",
    currentRole: "Director - Digital Supply Chain, Accenture"
  }
];

const keyInitiatives = [
  {
    title: "Curriculum Modernization",
    description: "Integrating emerging technologies like AI, IoT, and blockchain into the curriculum"
  },
  {
    title: "Industry-Academia Bridge",
    description: "Developing joint programs with leading industries for practical exposure"
  },
  {
    title: "Research Collaboration",
    description: "Promoting interdisciplinary research in sustainable materials management"
  },
  {
    title: "Global Best Practices",
    description: "Incorporating international standards and case studies into course content"
  }
];

const upcomingPrograms = [
  "Advanced Certification in Digital Supply Chain Management",
  "Executive Program in Sustainable Supply Chain",
  "Certification in Logistics Analytics",
  "Workshop on AI in Materials Management"
];

export default function BoardOfStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <InstituteHero
        title="Board of Studies"
        subtitle="Championing Academic Excellence in Materials Management"
        image={heroImage}
      />
      
      <div className="max-w-6xl mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6 text-primary">About the Board of Studies</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              The Board of Studies (BoS) at the Indian Institute of Materials Management serves as the apex academic body 
              responsible for maintaining and enhancing the academic standards of all educational programs. Comprising 
              distinguished academicians, industry leaders, and subject matter experts, the board ensures that our curriculum 
              remains contemporary, industry-relevant, and globally competitive.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Vision</h3>
              <p className="text-gray-700 mb-4">
                To establish IIMM as a global leader in materials management education through innovative curriculum design, 
                cutting-edge research, and strong industry-academia collaboration.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">Mission</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Develop and maintain a dynamic curriculum that meets global standards</li>
                <li>Foster research and innovation in materials management</li>
                <li>Bridge the gap between academic learning and industry requirements</li>
                <li>Promote ethical and sustainable practices in the profession</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-semibold mb-6 text-primary">Key Responsibilities</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Design, review, and update academic programs and curriculum",
                "Ensure alignment of curriculum with industry requirements and global standards",
                "Develop and approve new courses and specializations",
                "Review and update teaching-learning methodologies and assessment patterns",
                "Guide research activities, projects, and industry collaborations",
                "Mentor faculty development programs and teaching excellence initiatives",
                "Evaluate and recommend academic partnerships with institutions",
                "Monitor and enhance the quality of academic delivery"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-6 text-primary">Board Members</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {boardMembers.map((member, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-primary font-medium">{member.designation}</p>
                      <p className="text-sm text-gray-600 mt-1">{member.currentRole}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-sm">
                      <span className="font-medium text-gray-700">Qualification:</span> {member.qualification}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-700">Expertise:</span> {member.expertise}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium text-gray-700">Experience:</span> {member.experience}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Key Initiatives</h3>
                <div className="space-y-4">
                  {keyInitiatives.map((initiative, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <h4 className="font-semibold text-gray-900">{initiative.title}</h4>
                      <p className="text-gray-700 mt-1">{initiative.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Upcoming Programs</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {upcomingPrograms.map((program, index) => (
                      <li key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-5 w-5 text-primary">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-700">{program}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold text-primary mb-3">Meetings & Activities</h3>
                  <p className="text-gray-700 mb-4">
                    The Board of Studies convenes quarterly to review academic matters, with additional special meetings 
                    scheduled as needed to address emerging academic requirements and strategic initiatives.
                  </p>
                  <p className="text-gray-700">
                    For academic inquiries, curriculum suggestions, or collaboration opportunities, please contact:
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:ml-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900">Board of Studies Secretariat</h4>
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Email:</span>{' '}
                      <a href="mailto:bos@iimm.org" className="text-blue-600 hover:underline">bos@iimm.org</a>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Phone:</span> +91-22-2756 5750
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Address:</span> IIMM House, Plot No. 102, Sector 15, CBD Belapur, Navi Mumbai - 400 614
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
