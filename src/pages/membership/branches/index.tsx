import { Link, Outlet, useLocation } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function IIMMBranches() {
  const location = useLocation();
  
  // Determine the active tab based on the current route
  const activeTab = location.pathname.split('/').pop() || 'north';

  const branches = [
    { id: 'north', name: 'North Zone' },
    { id: 'south', name: 'South Zone' },
    { id: 'east', name: 'East Zone' },
    { id: 'west', name: 'West Zone' },
    { id: 'central', name: 'Central Zone' },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">IIMM Branches</h1>
        <p className="text-muted-foreground">
          Explore our network of branches across India
        </p>
      </div>

      <Tabs value={activeTab} className="w-full">
        <TabsList className="w-full max-w-4xl mx-auto mb-8 flex flex-wrap justify-center">
          {branches.map((branch) => (
            <TabsTrigger key={branch.id} value={branch.id} asChild>
              <Link to={`/membership/branches/${branch.id}`} className="px-4 py-2">
                {branch.name}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="max-w-4xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
