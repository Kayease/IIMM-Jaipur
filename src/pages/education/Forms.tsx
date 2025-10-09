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
      type: "PDF"
    },
    {
      title: "ADMM Application Form",
      description: "Application form for Advanced Diploma in Materials Management",
      code: "ADMM-FORM-2024",
      lastUpdated: "15 Jan 2024",
      size: "1.1 MB",
      type: "PDF"
    },
    {
      title: "DMM Application Form",
      description: "Application form for Diploma in Materials Management",
      code: "DMM-FORM-2024",
      lastUpdated: "15 Jan 2024",
      size: "1.0 MB",
      type: "PDF"
    },
    {
      title: "Certificate Course Application",
      description: "Application form for all certificate courses",
      code: "CERT-FORM-2024",
      lastUpdated: "15 Jan 2024",
      size: "980 KB",
      type: "PDF"
    },
    {
      title: "Scholarship Application Form",
      description: "Application form for various scholarship programs",
      code: "SCHOLARSHIP-FORM-2024",
      lastUpdated: "20 Jan 2024",
      size: "850 KB",
      type: "PDF"
    },
    {
      title: "Hostel Application Form",
      description: "Application form for hostel accommodation",
      code: "HOSTEL-FORM-2024",
      lastUpdated: "10 Jan 2024",
      size: "920 KB",
      type: "PDF"
    },
    {
      title: "ID Card Application",
      description: "Application form for duplicate ID card",
      code: "IDCARD-FORM",
      lastUpdated: "5 Jan 2024",
      size: "780 KB",
      type: "PDF"
    },
    {
      title: "Bonafide Certificate",
      description: "Application form for bonafide certificate",
      code: "BONAFIDE-FORM",
      lastUpdated: "8 Jan 2024",
      size: "810 KB",
      type: "PDF"
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
                Find and download the required application forms for various programs and services at IIMM Delhi.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {forms.map((form, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">{form.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{form.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <FileText className="h-4 w-4 mr-1 text-primary" />
                        {form.type}
                      </span>
                      <span>•</span>
                      <span>Code: {form.code}</span>
                      <span>•</span>
                      <span>{form.size}</span>
                      <span>•</span>
                      <span>Updated: {form.lastUpdated}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        <Download className="h-4 w-4 mr-2" />
                        Download Form
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
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

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-6">
                  If you're having trouble finding or filling out any forms, our admission team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:admission@iimmdelhi.org"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Email Admission Office
                  </a>
                  <a
                    href="tel:+911141354969"
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Call Us: +91-11-41354969
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
