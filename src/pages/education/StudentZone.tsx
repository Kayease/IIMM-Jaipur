import { Link } from "react-router-dom";
import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";
import { BookOpen, Users, Calendar, FileText, Award, GraduationCap, Briefcase, Clock, FileCheck } from "lucide-react";

const StudentZone = () => {
  const quickLinks = [
    {
      title: "Academic Calendar",
      icon: <Calendar className="h-8 w-8 text-primary" />,
      description: "View important dates, holidays, and academic schedules",
      link: "/education/student-zone/academic-calendar"
    },
    {
      title: "Course Materials",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      description: "Access lecture notes, presentations, and study resources",
      link: "/education/student-zone/course-materials"
    },
    {
      title: "Exam Schedule",
      icon: <FileText className="h-8 w-8 text-primary" />,
      description: "Check examination dates, timings, and guidelines",
      link: "/education/student-zone/exam-schedule"
    },
    {
      title: "Student Portal",
      icon: <Users className="h-8 w-8 text-primary" />,
      description: "Access your academic records and personal dashboard",
      link: "/education/student-zone/portal"
    },
    {
      title: "Placement Cell",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      description: "Career opportunities and placement information",
      link: "/education/student-zone/placement"
    },
    {
      title: "Time Table",
      icon: <Clock className="h-8 w-8 text-primary" />,
      description: "View your class and exam schedules",
      link: "/education/student-zone/timetable"
    },
    {
      title: "Results",
      icon: <Award className="h-8 w-8 text-primary" />,
      description: "Check your examination results and grades",
      link: "/education/student-zone/results"
    },
    {
      title: "Scholarships",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      description: "Information about available scholarships and financial aid",
      link: "/education/student-zone/scholarships"
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Campus Recruitment Drive - TCS",
      date: "2025-10-15",
      category: "Placement"
    },
    {
      id: 2,
      title: "Mid-Term Examination Schedule Released",
      date: "2025-10-10",
      category: "Examination"
    },
    {
      id: 3,
      title: "Industry Expert Lecture on Supply Chain Trends",
      date: "2025-10-05",
      category: "Event"
    },
    {
      id: 4,
      title: "Last Date for Project Submission Extended",
      date: "2025-10-03",
      category: "Academic"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <InstituteHero
        title="Student Zone"
        subtitle="Your Gateway to Academic Resources and Information"
        image={heroImage}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Student Zone</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Access all your academic resources, important announcements, and student services in one place.
                Stay updated with the latest information and make the most of your academic journey at IIMM Delhi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      className="group p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          {link.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-primary">
                            {link.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Announcements</h3>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <FileCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {announcement.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <span>{announcement.date}</span>
                            <span className="mx-2">•</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                              {announcement.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center mt-4">
                    <Link 
                      to="/education/student-zone/announcements" 
                      className="text-primary hover:underline font-medium"
                    >
                      View All Announcements →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Academic Resources</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">E-Library</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Access a vast collection of e-books, journals, and research papers.
                  </p>
                  <Link to="/education/student-zone/elibrary" className="text-primary text-sm font-medium hover:underline">
                    Access Library →
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Student Forums</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Engage in discussions, ask questions, and collaborate with peers.
                  </p>
                  <Link to="/education/student-zone/forums" className="text-primary text-sm font-medium hover:underline">
                    Visit Forums →
                  </Link>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Career Services</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Explore career opportunities, resume building, and interview preparation.
                  </p>
                  <Link to="/education/student-zone/career-services" className="text-primary text-sm font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-lg p-8 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
                <p className="mb-6 text-blue-100">
                  Our student support team is here to help you with any questions or concerns you may have about your academic journey.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:studentsupport@iimmdelhi.edu"
                    className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Contact Support
                  </a>
                  <a
                    href="tel:+911123456789"
                    className="px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentZone;
