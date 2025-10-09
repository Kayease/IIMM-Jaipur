import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";
import { BookOpen, GraduationCap, Users, Clock, Award } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Post Graduate Diploma in Materials Management (PGDMM)",
      duration: "2 Years",
      eligibility: "Graduation in any discipline",
      description: "Comprehensive program covering all aspects of materials and supply chain management."
    },
    {
      title: "Advanced Diploma in Materials Management (ADMM)",
      duration: "1 Year",
      eligibility: "Graduation in any discipline",
      description: "Focused program for working professionals looking to enhance their skills."
    },
    {
      title: "Diploma in Materials Management (DMM)",
      duration: "1 Year",
      eligibility: "10+2 or equivalent",
      description: "Entry-level program for those starting their career in materials management."
    },
    {
      title: "Certificate Course in Supply Chain Management",
      duration: "6 Months",
      eligibility: "10+2 or equivalent",
      description: "Specialized course focusing on supply chain operations and logistics."
    },
    {
      title: "Certificate Course in Purchase Management",
      duration: "6 Months",
      eligibility: "10+2 or equivalent",
      description: "Focused training in procurement and vendor management."
    },
    {
      title: "Certificate Course in Stores Management",
      duration: "3 Months",
      eligibility: "10th pass",
      description: "Basic course in inventory and warehouse management."
    }
  ];

  const features = [
    {
      title: "Industry-Relevant Curriculum",
      description: "Regularly updated courses to match industry requirements",
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      title: "Expert Faculty",
      description: "Learn from experienced professionals and industry experts",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      title: "Flexible Learning",
      description: "Weekend and evening batches available for working professionals",
      icon: <Clock className="h-8 w-8 text-primary" />
    },
    {
      title: "Placement Support",
      description: "Dedicated placement cell for career assistance",
      icon: <Award className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <InstituteHero
        title="Academic Courses"
        subtitle="Building Careers in Materials Management"
        image={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Programs</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <p className="text-gray-700 mb-12">
              IIMM Delhi offers a range of academic programs designed to provide comprehensive knowledge and practical skills in materials and supply chain management. Our courses are designed to meet the needs of both fresh graduates and working professionals.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {courses.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-primary text-white px-6 py-4">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                      <span>Eligibility: {course.eligibility}</span>
                    </div>
                    <button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Our Programs?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Admissions Open for 2024-25</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Start your journey towards a successful career in materials management. Our admission process is simple and transparent.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-6 rounded-md transition-colors">
                  Apply Now
                </button>
                <button className="border border-primary text-primary hover:bg-primary/5 font-medium py-2.5 px-6 rounded-md transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
