import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

type FormData = {
  institutionName: string;
  institutionType: string;
  yearOfEstablishment: string;
  registrationNumber: string;
  website: string;
  contactPerson: string;
  designation: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  aboutInstitution: string;
  facilities: string;
  facultyCount: number;
  studentCount: number;
  coursesOffered: string;
  registrationProof: FileList | null;
  institutionLogo: FileList | null;
  termsAccepted: boolean;
};

export default function InstitutionalApplicationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const currentYear = new Date().getFullYear();

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setCurrentStep(3); // Move to success step
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Institutional Membership Application</h2>
      
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step}
            </div>
            <span className="text-sm mt-2">
              {step === 1 ? 'Institution' : step === 2 ? 'Contact' : 'Review'}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Institution Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="institutionName">Institution Name *</Label>
                <Input 
                  id="institutionName" 
                  {...register('institutionName', { required: 'Institution name is required' })} 
                />
                {errors.institutionName && <p className="text-red-500 text-sm">{errors.institutionName.message}</p>}
              </div>

              <div>
                <Label htmlFor="institutionType">Institution Type *</Label>
                <select
                  id="institutionType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register('institutionType', { required: 'Institution type is required' })}
                >
                  <option value="">Select institution type</option>
                  <option value="university">University</option>
                  <option value="college">College</option>
                  <option value="school">School</option>
                  <option value="research">Research Institute</option>
                  <option value="training">Training Institute</option>
                  <option value="other">Other</option>
                </select>
                {errors.institutionType && <p className="text-red-500 text-sm">{errors.institutionType.message}</p>}
              </div>

              <div>
                <Label htmlFor="yearOfEstablishment">Year of Establishment *</Label>
                <Input 
                  id="yearOfEstablishment" 
                  type="number"
                  min="1800"
                  max={currentYear}
                  {...register('yearOfEstablishment', { 
                    required: 'Year of establishment is required',
                    min: { value: 1800, message: 'Please enter a valid year' },
                    max: { value: currentYear, message: 'Year cannot be in the future' },
                  })} 
                />
                {errors.yearOfEstablishment && <p className="text-red-500 text-sm">{errors.yearOfEstablishment.message}</p>}
              </div>

              <div>
                <Label htmlFor="registrationNumber">Registration Number *</Label>
                <Input 
                  id="registrationNumber" 
                  {...register('registrationNumber', { required: 'Registration number is required' })} 
                  placeholder="e.g., UGC/ABC/12345"
                />
                {errors.registrationNumber && <p className="text-red-500 text-sm">{errors.registrationNumber.message}</p>}
              </div>

              <div>
                <Label htmlFor="facultyCount">Number of Faculty Members *</Label>
                <Input 
                  id="facultyCount" 
                  type="number"
                  min="1"
                  {...register('facultyCount', { 
                    required: 'Faculty count is required',
                    min: { value: 1, message: 'Must have at least 1 faculty member' },
                  })} 
                />
                {errors.facultyCount && <p className="text-red-500 text-sm">{errors.facultyCount.message}</p>}
              </div>

              <div>
                <Label htmlFor="studentCount">Number of Students *</Label>
                <Input 
                  id="studentCount" 
                  type="number"
                  min="1"
                  {...register('studentCount', { 
                    required: 'Student count is required',
                    min: { value: 1, message: 'Must have at least 1 student' },
                  })} 
                />
                {errors.studentCount && <p className="text-red-500 text-sm">{errors.studentCount.message}</p>}
              </div>
            </div>

            <div className="mt-4">
              <Label htmlFor="aboutInstitution">About the Institution *</Label>
              <textarea
                id="aboutInstitution"
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                {...register('aboutInstitution', { required: 'About institution is required' })}
              ></textarea>
              {errors.aboutInstitution && <p className="text-red-500 text-sm">{errors.aboutInstitution.message}</p>}
            </div>

            <div className="mt-4">
              <Label htmlFor="facilities">Facilities Available *</Label>
              <textarea
                id="facilities"
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="List of facilities like library, labs, etc."
                {...register('facilities', { required: 'Facilities information is required' })}
              ></textarea>
              {errors.facilities && <p className="text-red-500 text-sm">{errors.facilities.message}</p>}
            </div>

            <div className="mt-4">
              <Label htmlFor="coursesOffered">Courses Offered *</Label>
              <textarea
                id="coursesOffered"
                rows={3}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="List of courses offered by the institution"
                {...register('coursesOffered', { required: 'Courses information is required' })}
              ></textarea>
              {errors.coursesOffered && <p className="text-red-500 text-sm">{errors.coursesOffered.message}</p>}
            </div>

            <div className="flex justify-end mt-6">
              <Button type="button" onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next: Contact Information
              </Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contactPerson">Contact Person Name *</Label>
                <Input 
                  id="contactPerson" 
                  {...register('contactPerson', { required: 'Contact person name is required' })} 
                />
                {errors.contactPerson && <p className="text-red-500 text-sm">{errors.contactPerson.message}</p>}
              </div>

              <div>
                <Label htmlFor="designation">Designation *</Label>
                <Input 
                  id="designation" 
                  {...register('designation', { required: 'Designation is required' })} 
                />
                {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })} 
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number',
                    },
                  })} 
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              <div>
                <Label htmlFor="website">Website</Label>
                <Input 
                  id="website" 
                  type="url"
                  placeholder="https://example.com"
                  {...register('website', {
                    pattern: {
                      value: /^https?:\/\/.+\..+$/i,
                      message: 'Please enter a valid URL',
                    },
                  })} 
                />
                {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}
              </div>
            </div>

            <div className="mt-4">
              <Label htmlFor="address">Address *</Label>
              <Input 
                id="address" 
                {...register('address', { required: 'Address is required' })} 
                placeholder="Full address"
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input 
                  id="city" 
                  {...register('city', { required: 'City is required' })} 
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
              </div>

              <div>
                <Label htmlFor="state">State *</Label>
                <Input 
                  id="state" 
                  {...register('state', { required: 'State is required' })} 
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
              </div>

              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input 
                  id="pincode" 
                  {...register('pincode', { 
                    required: 'Pincode is required',
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: 'Please enter a valid 6-digit pincode',
                    },
                  })} 
                />
                {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="font-medium">Upload Required Documents</h4>
              
              <div>
                <Label htmlFor="registrationProof">Registration Certificate (Max 5MB, PDF) *</Label>
                <Input 
                  id="registrationProof" 
                  type="file" 
                  accept=".pdf"
                  {...register('registrationProof', { required: 'Registration proof is required' })} 
                />
                {errors.registrationProof && <p className="text-red-500 text-sm">{errors.registrationProof.message}</p>}
              </div>

              <div>
                <Label htmlFor="institutionLogo">Institution Logo (Max 2MB, JPG/PNG)</Label>
                <Input 
                  id="institutionLogo" 
                  type="file" 
                  accept="image/jpeg,image/png"
                  {...register('institutionLogo')} 
                />
              </div>

              <div className="mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    {...register('termsAccepted', { required: 'You must accept the terms and conditions' })}
                  />
                  <Label htmlFor="terms">
                    I hereby declare that all the information provided is true to the best of my knowledge. *
                  </Label>
                </div>
                {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">Application Submitted Successfully!</h3>
            <p className="mt-2 text-sm text-gray-500">
              Thank you for applying for Institutional Membership. Your application has been received and is being processed.
              You will receive a confirmation email with further instructions shortly.
            </p>
            <div className="mt-6">
              <Button 
                type="button" 
                onClick={() => {
                  // Reset form and go back to step 1
                  setCurrentStep(1);
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Submit Another Application
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
