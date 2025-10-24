import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MandatoryDisclosures = () => {
  const disclosures = [
    {
      title: "Approvals & Affiliations",
      description: "View our approvals from regulatory bodies and list of affiliations.",
      documents: [
        { name: "UGC Approval Letter", url: "/documents/ugc-approval.pdf" },
        { name: "AICTE Affiliations", url: "/documents/aicte-affiliation.pdf" },
        { name: "NAAC Accreditation", url: "/documents/naac-certificate.pdf" }
      ]
    },
    {
      title: "Financial Information",
      description: "Access audited financial statements and fee structure.",
      documents: [
        { name: "Audited Financial Report 2023-24", url: "/documents/financial-report-2024.pdf" },
        { name: "Fee Structure", url: "/education/fees" },
        { name: "Refund Policy", url: "/documents/refund-policy.pdf" }
      ]
    },
    {
      title: "Faculty & Staff",
      description: "Details about our faculty members and staff.",
      documents: [
        { name: "Faculty Directory", url: "/education/faculty" },
        { name: "Faculty Qualifications", url: "/documents/faculty-qualifications.pdf" },
        { name: "Staff Details", url: "/documents/staff-details.pdf" }
      ]
    },
    {
      title: "Student Information",
      description: "Policies and information for students.",
      documents: [
        { name: "Academic Calendar", url: "/documents/academic-calendar.pdf" },
        { name: "Scholarship Details", url: "/education/scholarships" },
        { name: "Grievance Redressal", url: "/documents/grievance-policy.pdf" }
      ]
    },
    {
      title: "Infrastructure",
      description: "Details about our campus and facilities.",
      documents: [
        { name: "Campus Facilities", url: "/about/campus" },
        { name: "Library Resources", url: "/documents/library-resources.pdf" },
        { name: "IT Infrastructure", url: "/documents/it-infrastructure.pdf" }
      ]
    },
    {
      title: "Examinations",
      description: "Examination related information and policies.",
      documents: [
        { name: "Examination Rules", url: "/documents/exam-rules.pdf" },
        { name: "Exam Schedule", url: "/education/exam-schedule" },
        { name: "Results", url: "/education/results" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Mandatory Disclosures</h1>
      <p className="text-gray-600 mb-8">As per regulatory requirements, we provide the following mandatory disclosures and documents.</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {disclosures.map((section, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
              <p className="text-sm text-gray-600">{section.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-2">
                {section.documents.map((doc, docIndex) => (
                  <div key={docIndex} className="flex items-center justify-between">
                    <span className="text-sm">{doc.name}</span>
                    <a 
                      href={doc.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <p className="mb-4">
          For any queries regarding the mandatory disclosures or to request additional information, 
          please contact our administration office.
        </p>
        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
          Contact Administration
        </Button>
      </div>
    </div>
  );
};

export default MandatoryDisclosures;
