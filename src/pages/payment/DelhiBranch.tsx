import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DelhiBranch() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Delhi Branch - Online Payment</CardTitle>
          <CardDescription>
            Make secure online payments for Delhi Branch services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Bank of Baroda</h3>
            <div className="space-y-1 text-sm">
              <p><strong>Account Name:</strong> IIMM Delhi Chapter</p>
              <p><strong>Account Number:</strong> 1234567890</p>
              <p><strong>IFSC Code:</strong> BARB0IMMDEL</p>
              <p><strong>Branch:</strong> Connaught Place, New Delhi</p>
            </div>
            <Button className="mt-4" onClick={() => window.open('https://www.bankofbaroda.in/online-payment', '_blank')}>
              Pay Now (Bank of Baroda)
            </Button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Payment Instructions</h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Select 'Payments/Transfers' and then 'Merchant Payments'</li>
              <li>Enter the merchant details as mentioned above</li>
              <li>Enter the payment amount and your reference number</li>
              <li>Verify the details and confirm the payment</li>
              <li>Save the transaction ID for future reference</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Note:</strong> Please mention your membership number in the payment reference. For any payment related queries, please email <a href="mailto:accounts@iimmdelhi.org" className="text-blue-600 hover:underline">accounts@iimmdelhi.org</a>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
