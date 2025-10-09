import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NHQEducation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>NHQ Education Wing - Online Payment</CardTitle>
          <CardDescription>
            Make secure online payments for IIMM Education Wing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">ICICI Bank</h3>
            <div className="space-y-1 text-sm">
              <p><strong>Account Name:</strong> IIMM Education Wing</p>
              <p><strong>Account Number:</strong> 1122334455</p>
              <p><strong>IFSC Code:</strong> ICIC0001234</p>
              <p><strong>Branch:</strong> Andheri East, Mumbai</p>
            </div>
            <Button className="mt-4" onClick={() => window.open('https://www.icicibank.com/online-payment', '_blank')}>
              Pay Now (ICICI Bank)
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Payment Instructions</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Select 'Payments/Transfers' and then 'Merchant Payments'</li>
              <li>Enter the merchant details as mentioned above</li>
              <li>Enter the payment amount and your student ID/reference number</li>
              <li>Verify the details and confirm the payment</li>
              <li>Save the transaction ID for future reference</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  <strong>Note:</strong> Please mention your student ID or reference number in the payment reference. For any payment related queries, please email <a href="mailto:education@iimm.org" className="text-blue-600 hover:underline">education@iimm.org</a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
