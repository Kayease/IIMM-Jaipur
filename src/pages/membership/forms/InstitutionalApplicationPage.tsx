import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import InstitutionalApplicationForm from "./InstitutionalApplicationForm";

export default function InstitutionalApplicationPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-2xl">Institutional Membership Application</CardTitle>
            <CardDescription>
              Apply for institutional membership for your organization
            </CardDescription>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/membership/types#institutional" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              View Benefits
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <InstitutionalApplicationForm />
      </CardContent>
    </Card>
  );
}
