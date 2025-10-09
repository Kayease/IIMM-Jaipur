import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GSTInfo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>GST Information</CardTitle>
          <CardDescription>
            GST details for IIMM and its branches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">IIMM National Headquarters</h3>
              <div className="space-y-1 text-sm">
                <p><strong>Legal Name:</strong> Indian Institute of Materials Management</p>
                <p><strong>GSTIN:</strong> 27AAATI1234M1Z1</p>
                <p><strong>PAN:</strong> AAATI1234M</p>
                <p><strong>State:</strong> Maharashtra</p>
                <p><strong>Address:</strong> 101, 1st Floor, 'Prathamesh', 85, Dr. Annie Besant Road, Worli, Mumbai - 400018</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">IIMM Delhi Chapter</h3>
              <div className="space-y-1 text-sm">
                <p><strong>Legal Name:</strong> Indian Institute of Materials Management - Delhi Chapter</p>
                <p><strong>GSTIN:</strong> 07AAATI1234M1Z2</p>
                <p><strong>PAN:</strong> AAATI1234M</p>
                <p><strong>State:</strong> Delhi</p>
                <p><strong>Address:</strong> 25, Institutional Area, Pankha Road, D-Block, Janakpuri, New Delhi - 110058</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium mb-4">Important Notes</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>GST is applicable as per the prevailing rates</li>
                <li>Please ensure to provide your GSTIN if you require a GST invoice</li>
                <li>For any GST related queries, please contact your respective branch office</li>
                <li>All payments should be made through official channels only</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-sm mb-2">For GST Related Queries:</h4>
              <p className="text-sm text-gray-600">
                Email: <a href="mailto:gst@iimm.org" className="text-blue-600 hover:underline">gst@iimm.org</a><br />
                Phone: +91-22-12345678 (Mon-Sat, 10:00 AM to 6:00 PM IST)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
