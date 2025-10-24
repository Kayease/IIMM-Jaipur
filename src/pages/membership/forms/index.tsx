import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Building2, User } from "lucide-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function ApplicationForms() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine the active tab based on the current route
  const activeTab = location.pathname.includes('institutional') ? 'institutional' : 'ordinary';
  
  const handleTabChange = (value: string) => {
    navigate(`/membership/forms/${value}`);
  };
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Membership Application</h1>
        <p className="text-muted-foreground">
          Choose the type of membership you would like to apply for
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="ordinary" asChild>
              <Link to="/membership/forms/ordinary" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Ordinary Membership
              </Link>
            </TabsTrigger>
            <TabsTrigger value="institutional" asChild>
              <Link to="/membership/forms/institutional" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Institutional
              </Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* This will render the matched child route */}
        <Outlet />
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>
          Need help with your application? Contact our membership team at{' '}
          <a href="mailto:membership@iimm.org" className="text-primary hover:underline">
            membership@iimm.org
          </a>
        </p>
      </div>
    </div>
  );
}
