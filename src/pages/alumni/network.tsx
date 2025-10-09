import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, Building, Filter, X } from 'lucide-react';

const AlumniNetworkPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    industry: '',
    company: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Mock data - in a real app, this would come from an API
  const alumni = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      batch: '2015',
      position: 'Supply Chain Manager',
      company: 'Tata Steel',
      location: 'Mumbai, India',
      industry: 'Manufacturing',
      image: '/images/alumni/rajesh.jpg'
    },
    {
      id: 2,
      name: 'Priya Patel',
      batch: '2018',
      position: 'Procurement Specialist',
      company: 'Reliance Industries',
      location: 'New Delhi, India',
      industry: 'Oil & Gas',
      image: '/images/alumni/priya.jpg'
    },
    // Add more alumni as needed
  ];

  const locations = [...new Set(alumni.map(a => a.location))];
  const industries = [...new Set(alumni.map(a => a.industry))];
  const companies = [...new Set(alumni.map(a => a.company))];

  const filteredAlumni = alumni.filter(alumnus => {
    const matchesSearch = 
      alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = 
      (!filters.location || alumnus.location === filters.location) &&
      (!filters.industry || alumnus.industry === filters.industry) &&
      (!filters.company || alumnus.company === filters.company);
    
    return matchesSearch && matchesFilters;
  });

  const clearFilters = () => {
    setFilters({
      location: '',
      industry: '',
      company: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni Network</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">Connect with fellow IIMM alumni across the globe</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, position, or company..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {showFilters && (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select
                    id="location"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                  <select
                    id="industry"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filters.industry}
                    onChange={(e) => setFilters({...filters, industry: e.target.value})}
                  >
                    <option value="">All Industries</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <select
                    id="company"
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filters.company}
                    onChange={(e) => setFilters({...filters, company: e.target.value})}
                  >
                    <option value="">All Companies</option>
                    {companies.map((company) => (
                      <option key={company} value={company}>{company}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {(filters.location || filters.industry || filters.company) && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {filteredAlumni.length} {filteredAlumni.length === 1 ? 'Alumnus' : 'Alumni'} Found
          </h2>
          <div className="text-sm text-gray-500">
            Showing {filteredAlumni.length} of {alumni.length} alumni
          </div>
        </div>

        {/* Alumni Grid */}
        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alumnus) => (
              <div key={alumnus.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500">
                      {alumnus.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{alumnus.name}</h3>
                      <p className="text-sm text-gray-500">Batch of {alumnus.batch}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{alumnus.position}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{alumnus.company}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{alumnus.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No alumni found</h3>
            <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Back to Alumni Home */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/alumni" className="inline-flex items-center text-blue-600 hover:underline">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Alumni Home
        </Link>
      </div>
    </div>
  );
};

export default AlumniNetworkPage;
