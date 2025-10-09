import { useState } from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

type Branch = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  website: string;
  contactPerson: string;
  designation: string;
};

export default function IIMMBranches() {
  const branches: Branch[] = [
    {
      id: 1,
      name: 'IIMM Delhi',
      address: 'C-9/7, Ramesh Nagar',
      city: 'New Delhi',
      state: 'Delhi',
      pincode: '110015',
      phone: '+91-11-25442425',
      email: 'delhi@iimm.org',
      website: 'www.iimmdelhi.org',
      contactPerson: 'Mr. Rajesh Kumar',
      designation: 'Branch Secretary'
    },
    {
      id: 2,
      name: 'IIMM Mumbai',
      address: 'A-203, Kailash Industrial Complex',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400072',
      phone: '+91-22-25774240',
      email: 'mumbai@iimm.org',
      website: 'www.iimmmumbai.org',
      contactPerson: 'Ms. Priya Sharma',
      designation: 'Branch Secretary'
    },
    {
      id: 3,
      name: 'IIMM Chennai',
      address: 'No. 24, 1st Main Road',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600034',
      phone: '+91-44-24952536',
      email: 'chennai@iimm.org',
      website: 'www.iimmchennai.org',
      contactPerson: 'Mr. Suresh Iyer',
      designation: 'Branch Secretary'
    },
    {
      id: 4,
      name: 'IIMM Kolkata',
      address: 'P-43, Princep Street',
      city: 'Kolkata',
      state: 'West Bengal',
      pincode: '700072',
      phone: '+91-33-22274567',
      email: 'kolkata@iimm.org',
      website: 'www.iimmkolkata.org',
      contactPerson: 'Mr. Amit Banerjee',
      designation: 'Branch Secretary'
    },
    {
      id: 5,
      name: 'IIMM Bengaluru',
      address: 'No. 48, 1st Cross',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560001',
      phone: '+91-80-22266889',
      email: 'bengaluru@iimm.org',
      website: 'www.iimmbengaluru.org',
      contactPerson: 'Ms. Ananya Reddy',
      designation: 'Branch Secretary'
    },
    {
      id: 6,
      name: 'IIMM Hyderabad',
      address: 'H.No. 1-8-333/1',
      city: 'Hyderabad',
      state: 'Telangana',
      pincode: '500001',
      phone: '+91-40-23456789',
      email: 'hyderabad@iimm.org',
      website: 'www.iimmhyderabad.org',
      contactPerson: 'Mr. Ramesh Gupta',
      designation: 'Branch Secretary'
    }
  ];

  const states = [...new Set(branches.map(branch => branch.state))];
  const [selectedState, setSelectedState] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredBranches = branches.filter(branch => {
    const matchesState = !selectedState || branch.state === selectedState;
    const matchesSearch = !searchTerm || 
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesState && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">IIMM Branches</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground">
          Find your nearest IIMM branch for membership and support
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search by Branch/City</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search branches..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <svg 
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filter by State</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary"
              >
                <option value="">All States</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBranches.map((branch) => (
          <div key={branch.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-3">{branch.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p>{branch.address}</p>
                    <p>{branch.city}, {branch.state} - {branch.pincode}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-500 mr-2" />
                  <a href={`tel:${branch.phone}`} className="hover:text-primary">
                    {branch.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-500 mr-2" />
                  <a href={`mailto:${branch.email}`} className="hover:text-primary break-all">
                    {branch.email}
                  </a>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-500 mr-2" />
                  <a 
                    href={`https://${branch.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary break-all"
                  >
                    {branch.website}
                  </a>
                </div>

                <div className="pt-2 mt-4 border-t border-gray-100">
                  <p className="font-medium">{branch.contactPerson}</p>
                  <p className="text-sm text-gray-500">{branch.designation}</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${branch.address}, ${branch.city}, ${branch.state} ${branch.pincode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  View on Map
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBranches.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">No branches found</h3>
          <p className="mt-1 text-sm text-gray-500">
            We couldn't find any branches matching your search criteria.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                setSelectedState('');
                setSearchTerm('');
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Clear filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
