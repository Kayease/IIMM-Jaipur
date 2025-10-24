import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Branch } from '@/types/branch';

interface BranchCardProps {
  branch: Branch;
  variant?: 'default' | 'compact';
}

export default function BranchCard({ branch, variant = 'default' }: BranchCardProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-bold text-primary mb-2">{branch.name}</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p>{branch.address}</p>
                <p>{branch.city}, {branch.state} - {branch.pincode}</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
              <a href={`tel:${branch.phone}`} className="hover:text-primary text-sm">
                {branch.phone}
              </a>
            </div>

            {branch.workingHours && (
              <div className="text-sm text-gray-600">
                <span className="font-medium">Hours:</span> {branch.workingHours}
              </div>
            )}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-100">
          <Link href={`/branches/${branch.slug}`} passHref>
            <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {branch.imageUrl && (
        <div className="h-40 bg-gray-100 overflow-hidden">
          <img 
            src={branch.imageUrl} 
            alt={branch.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-primary">{branch.name}</h3>
          {branch.headOffice && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Head Office
            </span>
          )}
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <p>{branch.address}</p>
              <p>{branch.city}, {branch.state} - {branch.pincode}</p>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
            <a href={`tel:${branch.phone}`} className="hover:text-primary">
              {branch.phone}
            </a>
          </div>

          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
            <a href={`mailto:${branch.email}`} className="hover:text-primary break-all">
              {branch.email}
            </a>
          </div>

          <div className="flex items-center">
            <Globe className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
            <a 
              href={`https://${branch.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary break-all"
            >
              {branch.website}
            </a>
          </div>

          {branch.workingHours && (
            <div className="pt-2 border-t border-gray-100">
              <p className="text-sm font-medium text-gray-700">Working Hours:</p>
              <p className="text-sm text-gray-600">{branch.workingHours}</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-100">
        <Link href={`/branches/${branch.slug}`} passHref>
          <Button className="w-full flex items-center justify-center">
            View Branch Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
