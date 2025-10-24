import { branches } from '@/data/branches';
import BranchCard from '@/components/branch/BranchCard';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function BranchesPage() {
  const states = [...new Set(branches.map(branch => branch.state))];
  
  // In a real app, you would use React state for search and filter
  const filteredBranches = branches; // This would be derived from state in a real implementation

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Branches</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Find your nearest IIMM branch for membership, training, and support services
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search by branch name or city
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  type="text"
                  placeholder="Search branches..."
                  className="pl-10"
                  // onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by state
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <MapPin className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Can't find a branch near you?</h2>
          <p className="text-gray-600 mb-6">
            We're constantly expanding our network. Contact us to learn about upcoming branches in your area or 
            explore our online resources and virtual events.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              Contact Us
            </a>
            <a
              href="/online-resources"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Online Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
