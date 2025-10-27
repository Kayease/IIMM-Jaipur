import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";
import { Download, FileText, AlertCircle, CheckCircle } from "lucide-react";

const Forms = () => {
  const forms = [
    {
      title: "PGDMM Application Form",
      description: "Application form for Post Graduate Diploma in Materials Management",
      code: "PGDMM-FORM-2024",
      lastUpdated: "15 Jan 2024",
      size: "1.2 MB",
      type: "PDF",
      bgColor: "bg-blue-500"
    },
    {
      title: "ADMM Application Form",
      description: "Application form for Advanced Diploma in Materials Management",
      code: "ADMM-FORM-2024",
      lastUpdated: "15 Jan 2024",
      size: "1.1 MB",
      type: "PDF",
      bgColor: "bg-green-500"
    },
    {
      title: "DMM Application Form",
      description: "Application form for Diploma in Materials Management",
      code: "DMM-FORM-2024",
      lastUpdated: "15 Jan 2024",
      size: "1.0 MB",
      type: "PDF",
      bgColor: "bg-yellow-500"
    },
    {
      title: "Certificate Course Application",
      description: "Application form for all certificate courses",
      code: "CERT-FORM-2024",
      lastUpdated: "15 Jan 2024",
      size: "980 KB",
      type: "PDF",
      bgColor: "bg-purple-500"
    },
    {
      title: "Scholarship Application Form",
      description: "Application form for various scholarship programs",
      code: "SCHOLARSHIP-FORM-2024",
      lastUpdated: "20 Jan 2024",
      size: "850 KB",
      type: "PDF",
      bgColor: "bg-pink-500"
    },
    {
      title: "Hostel Application Form",
      description: "Application form for hostel accommodation",
      code: "HOSTEL-FORM-2024",
      lastUpdated: "10 Jan 2024",
      size: "920 KB",
      type: "PDF",
      bgColor: "bg-cyan-500"
    },
    {
      title: "ID Card Application",
      description: "Application form for duplicate ID card",
      code: "IDCARD-FORM",
      lastUpdated: "5 Jan 2024",
      size: "780 KB",
      type: "PDF",
      bgColor: "bg-blue-500"
    },
    {
      title: "Bonafide Certificate",
      description: "Application form for bonafide certificate",
      code: "BONAFIDE-FORM",
      lastUpdated: "8 Jan 2024",
      size: "810 KB",
      type: "PDF",
      bgColor: "bg-pink-500"
    }
  ];

  const instructions = [
    "Download the required form",
    "Fill in all the details carefully",
    "Attach necessary documents",
    "Submit the form at the admission office or email to admission@iimmdelhi.org",
    "Pay the application fee (if applicable)",
    "Keep a copy of the submitted form for future reference"
  ];

  return (
    <div className="min-h-screen bg-white">
      <InstituteHero
        title="Application Forms"
        subtitle="Download and Submit Required Forms"
        image={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Application Forms</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {forms.map((form, index) => (
                <div key={index} className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1 ${form.bgColor} text-white`}>
                  <div className="bg-black/20 px-6 py-4">
                    <h3 className="text-lg font-semibold">{form.title}</h3>
                    <p className="text-sm opacity-90">{form.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-white/90" />
                        <span>Code: {form.code}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span>Type: {form.type}</span>
                        <span className="mx-2">•</span>
                        <span>Size: {form.size}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span>Last updated: {form.lastUpdated}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <button className="flex-1 flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-gray-800 py-2 px-4 rounded-md text-sm font-medium transition-colors">
                        <Download className="h-4 w-4" />
                        Download Form
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 py-2 px-4 rounded-md text-sm font-medium transition-colors">
                        <FileText className="h-4 w-4" />
                        View Instructions
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Submission Guidelines</h3>
                <ul className="space-y-3">
                  {instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Notes</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Incomplete forms</span> will not be processed. Please ensure all required fields are filled.
                    </p>
                  </div>
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Application fee</span> is non-refundable under any circumstances.
                    </p>
                  </div>
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <span className="font-medium">Keep a copy</span> of the submitted form and payment receipt for future reference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 text-white rounded-lg p-6 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Need Help?</h3>
                <p className="text-indigo-100 mb-6 text-lg">
                  If you're having trouble finding or filling out any forms, our admission team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:admission@iimmdelhi.org"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    Email Admission Office
                  </a>
                  <a
                    href="tel:+911141354969"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    +91-11-41354969
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

export default Forms;
