import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import OrdinaryApplicationForm from "./OrdinaryApplicationForm";

export default function OrdinaryApplicationPage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-2xl">Ordinary Membership Application</CardTitle>
            <CardDescription>
              Apply for individual professional membership with IIMM
            </CardDescription>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/membership/types" className="flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              View Membership Types
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <OrdinaryApplicationForm />
      </CardContent>
    </Card>
  );
}
