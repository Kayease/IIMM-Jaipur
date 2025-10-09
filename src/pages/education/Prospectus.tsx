import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";
import { Download, FileText, Award, Clock, BookOpen } from "lucide-react";

const Prospectus = () => {
  const prospectusItems = [
    {
      title: "Post Graduate Diploma in Materials Management (PGDMM)",
      code: "PGDMM-2024",
      lastUpdated: "January 2024",
      size: "2.5 MB",
      link: "#"
    },
    {
      title: "Advanced Diploma in Materials Management (ADMM)",
      code: "ADMM-2024",
      lastUpdated: "January 2024",
      size: "1.8 MB",
      link: "#"
    },
    {
      title: "Diploma in Materials Management (DMM)",
      code: "DMM-2024",
      lastUpdated: "January 2024",
      size: "1.5 MB",
      link: "#"
    },
    {
      title: "Certificate Courses 2024",
      code: "CERT-2024",
      lastUpdated: "February 2024",
      size: "1.2 MB",
      link: "#"
    }
  ];

  const importantDates = [
    { event: "Start of Application Process", date: "1st April 2024" },
    { event: "Last Date for Submission", date: "31st May 2024" },
    { event: "Entrance Test", date: "15th June 2024" },
    { event: "Interview (if applicable)", date: "20th - 25th June 2024" },
    { event: "Commencement of Classes", date: "1st July 2024" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <InstituteHero
        title="Prospectus"
        subtitle="Academic Year 2024-25"
        image={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Prospectus</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Download the detailed prospectus for our academic programs to learn about the curriculum, 
                admission process, fee structure, and more.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden mb-12">
              <div className="bg-primary text-white px-6 py-4">
                <h3 className="text-lg font-semibold">Available Prospectus</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {prospectusItems.map((item, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-gray-500">
                            <span>Code: {item.code}</span>
                            <span>Updated: {item.lastUpdated}</span>
                            <span>{item.size}</span>
                          </div>
                        </div>
                      </div>
                      <a 
                        href={item.link}
                        className="mt-3 md:mt-0 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                        download
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Dates</h3>
                <div className="space-y-4">
                  {importantDates.map((date, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 text-primary rounded-full p-1.5 mr-3">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{date.event}</p>
                        <p className="text-sm text-gray-600">{date.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Admission Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">1</span>
                    <div>
                      <p className="font-medium text-gray-900">Download and fill the application form</p>
                      <p className="text-sm text-gray-600">Available in the prospectus</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">2</span>
                    <div>
                      <p className="font-medium text-gray-900">Submit the form with required documents</p>
                      <p className="text-sm text-gray-600">In person or by post</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">3</span>
                    <div>
                      <p className="font-medium text-gray-900">Appear for entrance test/interview</p>
                      <p className="text-sm text-gray-600">If applicable</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-white text-sm font-medium rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">4</span>
                    <div>
                      <p className="font-medium text-gray-900">Complete admission formalities</p>
                      <p className="text-sm text-gray-600">Fee payment and document verification</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Need Help?</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      For any queries regarding admissions or prospectus, please contact our admission cell at 
                      <a href="mailto:admission@iimmdelhi.org" className="font-medium underline ml-1">admission@iimmdelhi.org</a> 
                      or call us at <a href="tel:+911141354969" className="font-medium">+91-11-41354969</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prospectus;
