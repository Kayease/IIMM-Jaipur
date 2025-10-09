import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";
import { IndianRupee, Award, Clock, FileText, Download } from "lucide-react";

const Fees = () => {
  const feeStructure = [
    {
      program: "Post Graduate Diploma in Materials Management (PGDMM)",
      duration: "2 Years",
      tuitionFee: "75,000",
      examFee: "5,000",
      registrationFee: "2,000",
      total: "82,000"
    },
    {
      program: "Advanced Diploma in Materials Management (ADMM)",
      duration: "1 Year",
      tuitionFee: "45,000",
      examFee: "3,000",
      registrationFee: "1,500",
      total: "49,500"
    },
    {
      program: "Diploma in Materials Management (DMM)",
      duration: "1 Year",
      tuitionFee: "35,000",
      examFee: "2,500",
      registrationFee: "1,000",
      total: "38,500"
    },
    {
      program: "Certificate Course (6 Months)",
      duration: "6 Months",
      tuitionFee: "15,000",
      examFee: "1,500",
      registrationFee: "500",
      total: "17,000"
    },
    {
      program: "Certificate Course (3 Months)",
      duration: "3 Months",
      tuitionFee: "8,000",
      examFee: "1,000",
      registrationFee: "500",
      total: "9,500"
    }
  ];

  const paymentOptions = [
    {
      method: "Online Payment",
      description: "Pay through our secure online payment gateway",
      instructions: [
        "Click on the 'Pay Fees Online' button",
        "Select your program and fill in the required details",
        "Make payment using credit/debit card, UPI, or net banking",
        "Download and save the payment receipt"
      ]
    },
    {
      method: "Demand Draft",
      description: "Pay via demand draft in favor of 'IIMM Delhi' payable at New Delhi",
      instructions: [
        "Prepare a demand draft for the applicable fee amount",
        "Mention your name and program on the back of the DD",
        "Submit the DD at the institute office or send by post"
      ]
    },
    {
      method: "NEFT/RTGS/IMPS",
      description: "Direct bank transfer to our account",
      details: {
        bankName: "Bank of Baroda",
        accountName: "IIMM Delhi",
        accountNumber: "12345678901",
        ifsc: "BARB0IMMDEL",
        branch: "Karol Bagh, New Delhi"
      }
    }
  ];

  const scholarships = [
    {
      name: "Merit Scholarship",
      description: "Awarded to top 5% students based on academic performance",
      amount: "Up to 25% of tuition fee"
    },
    {
      name: "Economically Weaker Section (EWS)",
      description: "For students from economically weaker sections of society",
      amount: "Up to 50% of tuition fee"
    },
    {
      name: "Defense Personnel Quota",
      description: "For children of defense personnel and ex-servicemen",
      amount: "15% concession on tuition fee"
    },
    {
      name: "Sibling Discount",
      description: "For siblings studying simultaneously at IIMM Delhi",
      amount: "10% discount for the second sibling"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <InstituteHero
        title="Fee Structure"
        subtitle="Academic Year 2024-25"
        image={heroImage}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Below is the detailed fee structure for various programs offered by IIMM Delhi for the academic year 2024-25.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Program
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tuition Fee (₹)
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Exam Fee (₹)
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Registration (₹)
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total (₹)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {fee.program}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {fee.duration}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          ₹{fee.tuitionFee}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          ₹{fee.examFee}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                          ₹{fee.registrationFee}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right">
                          ₹{fee.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-xs text-gray-500 border-t border-gray-200">
                <p>* Fees are subject to change. Additional charges may apply for study material, ID card, etc.</p>
                <p>* Installment facility available for selected programs. Please contact the admission office for details.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Options</h3>
                <div className="space-y-6">
                  {paymentOptions.map((option, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                      <h4 className="font-medium text-lg text-gray-900 mb-2">{option.method}</h4>
                      <p className="text-gray-600 mb-3">{option.description}</p>
                      
                      {option.instructions ? (
                        <ul className="space-y-2 mt-3">
                          {option.instructions.map((instruction, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span className="text-gray-700">{instruction}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="mt-3 space-y-2">
                          {Object.entries(option.details).map(([key, value]) => (
                            <div key={key} className="flex">
                              <span className="font-medium text-gray-700 w-32">{key}:</span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {option.method === "Online Payment" && (
                        <button className="mt-4 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center">
                          <span>Pay Fees Online</span>
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scholarships & Financial Aid</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Scholarship applications for the academic year 2024-25 are now open. Last date to apply is <span className="font-semibold">May 31, 2024</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                          <Award className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{scholarship.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{scholarship.description}</p>
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {scholarship.amount}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">Important Notes</h3>
                      <div className="mt-1 text-sm text-blue-700 space-y-1">
                        <p>• All fees are non-refundable once paid.</p>
                        <p>• Late fee of ₹500 will be charged after the due date.</p>
                        <p>• For any fee-related queries, contact accounts@iimmdelhi.org</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Download Fee Structure</h3>
                  <p className="mt-1 text-sm text-gray-600">Download the complete fee structure document for your reference.</p>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fees;
