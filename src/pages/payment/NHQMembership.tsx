import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NHQMembership() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>NHQ Membership - Online Payment</CardTitle>
          <CardDescription>
            Make secure online payments for IIMM National Headquarters Membership
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Bank of India</h3>
            <div className="space-y-1 text-sm">
              <p><strong>Account Name:</strong> Indian Institute of Materials Management NHQ</p>
              <p><strong>Account Number:</strong> 9876543210</p>
              <p><strong>IFSC Code:</strong> BKID0000123</p>
              <p><strong>Branch:</strong> Nariman Point, Mumbai</p>
            </div>
            <Button className="mt-4" onClick={() => window.open('https://www.bankofindia.co.in/online-payment', '_blank')}>
              Pay Now (Bank of India)
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Payment Instructions</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Select 'Payments/Transfers' and then 'Merchant Payments'</li>
              <li>Enter the merchant details as mentioned above</li>
              <li>Enter the payment amount and your membership number</li>
              <li>Verify the details and confirm the payment</li>
              <li>Save the transaction ID for future reference</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> Please mention your IIMM membership number in the payment reference. For any payment related queries, please email <a href="mailto:membership@iimm.org" className="text-blue-600 hover:underline">membership@iimm.org</a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
