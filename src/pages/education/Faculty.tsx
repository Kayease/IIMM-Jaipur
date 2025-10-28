import { useState } from "react";
import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";
import { Search, Filter, Mail, Phone, BookOpen, Award, GraduationCap, X } from "lucide-react";

type Faculty = {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualification: string[];
  experience: string;
  email: string;
  phone: string;
  areas: string[];
  image: string;
  bio: string;
  achievements: string[];
  courses: string[];
};

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = [
    "All Departments",
    "Materials Management",
    "Supply Chain Management",
    "Logistics",
    "Procurement",
    "Operations Management"
  ];

  const facultyMembers: Faculty[] = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head of Department",
      department: "Materials Management",
      qualification: ["Ph.D. in Supply Chain Management", "MBA in Operations"],
      experience: "18+ years",
      email: "rkumar@iimmjaipur.edu",
      phone: "+91 9876543210",
      areas: ["Supply Chain Optimization", "Inventory Control", "Strategic Sourcing"],
      image: "/faculty/rajesh-kumar.jpg",
      bio: "Dr. Rajesh Kumar is a distinguished academician with over 18 years of experience in teaching and research. He has published numerous research papers in reputed international journals and has guided several Ph.D. scholars.",
      achievements: [
        "Best Professor Award 2022",
        "Published 50+ research papers",
        "Visiting Faculty at IIM Ahmedabad"
      ],
      courses: ["Advanced Supply Chain Management", "Strategic Sourcing", "Research Methodology"]
    },
    {
      id: 2,
      name: "Prof. Meena Sharma",
      designation: "Associate Professor",
      department: "Supply Chain Management",
      qualification: ["Ph.D. in Logistics", "M.Tech in Industrial Engineering"],
      experience: "15 years",
      email: "msharma@iimmjaipur.edu",
      phone: "+91 9876543211",
      areas: ["Logistics Management", "Warehouse Design", "Transportation"],
      image: "/faculty/meena-sharma.jpg",
      bio: "Prof. Meena Sharma specializes in Logistics and Supply Chain Management with extensive industry experience. She has worked with leading logistics companies before joining academics.",
      achievements: [
        "Recipient of Young Researcher Award 2021",
        "Consultant to Ministry of Commerce",
        "Author of 3 books on Logistics"
      ],
      courses: ["Logistics Management", "Warehouse Operations", "Global Supply Chain"]
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      designation: "Assistant Professor",
      department: "Procurement",
      qualification: ["Ph.D. in Procurement", "MBA in Materials Management"],
      experience: "10 years",
      email: "apatel@iimm   jaipur.edu",
      phone: "+91 9876543212",
      areas: ["Strategic Sourcing", "Vendor Management", "E-Procurement"],
      image: "/faculty/amit-patel.jpg",
      bio: "Dr. Amit Patel is an expert in procurement strategies and has conducted various training programs for corporate professionals. His research focuses on sustainable procurement practices.",
      achievements: [
        "Best Paper Award at International Conference 2023",
        "Certified Procurement Professional (CIPS)",
        "Lead Auditor for ISO 9001:2015"
      ],
      courses: ["Strategic Procurement", "Vendor Development", "E-Procurement Systems"]
    },
    {
      id: 4,
      name: "Prof. Anjali Desai",
      designation: "Associate Professor",
      department: "Operations Management",
      qualification: ["Ph.D. in Operations Research", "M.Tech in Industrial Management"],
      experience: "12 years",
      email: "adesai@iimmjaipur.edu",
      phone: "+91 9876543213",
      areas: ["Operations Research", "Quality Management", "Lean Six Sigma"],
      image: "/faculty/anjali-desai.jpg",
      bio: "Prof. Anjali Desai specializes in Operations Research and has implemented various process improvement projects in manufacturing and service industries.",
      achievements: [
        "Black Belt in Six Sigma",
        "Awarded for Excellence in Teaching 2022",
        "Published 2 books on Operations Management"
      ],
      courses: ["Operations Research", "Total Quality Management", "Lean Manufacturing"]
    },
    {
      id: 5,
      name: "Dr. Sanjay Verma",
      designation: "Professor",
      department: "Materials Management",
      qualification: ["Ph.D. in Materials Management", "MBA in Operations"],
      experience: "20+ years",
      email: "sverma@iimmjaipur.edu",
      phone: "+91 9876543214",
      areas: ["Inventory Control", "Store Management", "Materials Planning"],
      image: "/faculty/sanjay-verma.jpg",
      bio: "With over two decades of experience, Dr. Sanjay Verma is a renowned expert in Materials Management. He has been a consultant to various PSUs and MNCs.",
      achievements: [
        "Lifetime Achievement Award 2023",
        "Former President of Indian Institute of Materials Management",
        "Advisor to Government of India on Materials Policy"
      ],
      courses: ["Advanced Materials Management", "Store Operations", "Materials Planning & Control"]
    },
    {
      id: 6,
      name: "Dr. Priya Singh",
      designation: "Assistant Professor",
      department: "Supply Chain Management",
      qualification: ["Ph.D. in Supply Chain Analytics", "M.Tech in Industrial Engineering"],
      experience: "8 years",
      email: "psingh@iimmjaipur.edu",
      phone: "+91 9876543215",
      areas: ["Supply Chain Analytics", "Blockchain in SCM", "Risk Management"],
      image: "/faculty/priya-singh.jpg",
      bio: "Dr. Priya Singh is a young and dynamic faculty member with expertise in emerging technologies in supply chain management. Her research focuses on the application of AI and blockchain in logistics.",
      achievements: [
        "Young Researcher Award 2023",
        "Certified Analytics Professional",
        "Speaker at International Conferences"
      ],
      courses: ["Supply Chain Analytics", "Digital Supply Chain", "Risk Management in SCM"]
    }
  ];

  const filteredFaculty = facultyMembers.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.areas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDepartment = departmentFilter === "all" || 
      faculty.department.toLowerCase() === departmentFilter.toLowerCase();
    
    return matchesSearch && matchesDepartment;
  });

  const openModal = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFaculty(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-white">
      <InstituteHero
        title="Our Faculty"
        subtitle="Learn from Industry Experts and Academicians"
        image={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Faculty</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our distinguished faculty members bring a wealth of academic knowledge and industry experience to provide students with a comprehensive learning experience.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Search faculty by name, designation, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept === "All Departments" ? "all" : dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredFaculty.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setDepartmentFilter("all");
                  }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFaculty.map((faculty) => (
                  <div 
                    key={faculty.id} 
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => openModal(faculty)}
                  >
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      {faculty.image ? (
                        <img 
                          src={faculty.image} 
                          alt={faculty.name} 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                          <span className="text-4xl font-bold text-gray-300">
                            {faculty.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{faculty.name}</h3>
                      <p className="text-primary font-medium mb-2">{faculty.designation}</p>
                      <p className="text-sm text-gray-600 mb-4">{faculty.department}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {faculty.areas.slice(0, 2).map((area, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {area}
                          </span>
                        ))}
                        {faculty.areas.length > 2 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            +{faculty.areas.length - 2} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <GraduationCap className="h-4 w-4 mr-1 text-primary" />
                        <span>{faculty.qualification[0].replace('Ph.D. in ', '')}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Award className="h-4 w-4 mr-1 text-primary" />
                        <span>{faculty.experience} experience</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Faculty Detail Modal */}
      {isModalOpen && selectedFaculty && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={closeModal}>
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-1">
                          {selectedFaculty.name}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {selectedFaculty.designation}
                        </p>
                        <p className="text-gray-600">{selectedFaculty.department}</p>
                      </div>
                      <button
                        type="button"
                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={closeModal}
                      >
                        <span className="sr-only">Close</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    
                    <div className="mt-6 grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
                          {selectedFaculty.image ? (
                            <img 
                              src={selectedFaculty.image} 
                              alt={selectedFaculty.name} 
                              className="h-full w-full object-cover rounded"
                            />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded flex items-center justify-center">
                              <span className="text-6xl font-bold text-gray-300">
                                {selectedFaculty.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="h-4 w-4 mr-2 text-primary" />
                            <a href={`mailto:${selectedFaculty.email}`} className="hover:underline">
                              {selectedFaculty.email}
                            </a>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="h-4 w-4 mr-2 text-primary" />
                            <a href={`tel:${selectedFaculty.phone}`} className="hover:underline">
                              {selectedFaculty.phone}
                            </a>
                          </div>
                          <div className="flex items-start text-sm text-gray-600">
                            <BookOpen className="h-4 w-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">Areas of Expertise:</p>
                              <ul className="list-disc list-inside">
                                {selectedFaculty.areas.map((area, index) => (
                                  <li key={index}>{area}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">About</h4>
                          <p className="text-gray-700">{selectedFaculty.bio}</p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualifications</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {selectedFaculty.qualification.map((qual, index) => (
                              <li key={index}>{qual}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Achievements</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {selectedFaculty.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Courses Taught</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedFaculty.courses.map((course, index) => (
                              <span 
                                key={index} 
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;
