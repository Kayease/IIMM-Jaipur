import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

type FormData = {
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  qualification: string;
  experience: string;
  currentOrganization: string;
  designation: string;
  photo: FileList | null;
  signature: FileList | null;
  idProof: FileList | null;
  qualificationProof: FileList | null;
  experienceProof: FileList | null;
  termsAccepted: boolean;
};

export default function OrdinaryApplicationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setCurrentStep(3); // Move to success step
    }, 2000);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Ordinary Membership Application</h2>
      
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
              {step === 1 ? 'Personal' : step === 2 ? 'Professional' : 'Review'}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Select {...register('title', { required: 'Title is required' })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mr">Mr.</SelectItem>
                    <SelectItem value="mrs">Mrs.</SelectItem>
                    <SelectItem value="ms">Ms.</SelectItem>
                    <SelectItem value="dr">Dr.</SelectItem>
                    <SelectItem value="prof">Prof.</SelectItem>
                  </SelectContent>
                </Select>
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>

              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input 
                  id="firstName" 
                  {...register('firstName', { required: 'First name is required' })} 
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>

              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input id="middleName" {...register('middleName')} />
              </div>

              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input 
                  id="lastName" 
                  {...register('lastName', { required: 'Last name is required' })} 
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>

              <div>
                <Label htmlFor="gender">Gender *</Label>
                <Select {...register('gender', { required: 'Gender is required' })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
              </div>

              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input 
                  id="dateOfBirth" 
                  type="date" 
                  {...register('dateOfBirth', { required: 'Date of birth is required' })} 
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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

            <div className="flex justify-end mt-6">
              <Button type="button" onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next: Professional Details
              </Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="qualification">Highest Qualification *</Label>
                <Input 
                  id="qualification" 
                  {...register('qualification', { required: 'Qualification is required' })} 
                />
                {errors.qualification && <p className="text-red-500 text-sm">{errors.qualification.message}</p>}
              </div>

              <div>
                <Label htmlFor="experience">Total Experience (Years) *</Label>
                <Input 
                  id="experience" 
                  type="number" 
                  min="0"
                  step="0.5"
                  {...register('experience', { 
                    required: 'Experience is required',
                    min: {
                      value: 0,
                      message: 'Experience cannot be negative',
                    },
                  })} 
                />
                {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
              </div>

              <div>
                <Label htmlFor="currentOrganization">Current Organization *</Label>
                <Input 
                  id="currentOrganization" 
                  {...register('currentOrganization', { required: 'Current organization is required' })} 
                />
                {errors.currentOrganization && <p className="text-red-500 text-sm">{errors.currentOrganization.message}</p>}
              </div>

              <div>
                <Label htmlFor="designation">Designation *</Label>
                <Input 
                  id="designation" 
                  {...register('designation', { required: 'Designation is required' })} 
                />
                {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="font-medium">Upload Required Documents</h4>
              
              <div>
                <Label htmlFor="photo">Passport Size Photo (Max 2MB, JPG/PNG) *</Label>
                <Input 
                  id="photo" 
                  type="file" 
                  accept="image/jpeg,image/png"
                  {...register('photo', { required: 'Photo is required' })} 
                />
                {errors.photo && <p className="text-red-500 text-sm">{errors.photo.message}</p>}
              </div>

              <div>
                <Label htmlFor="signature">Signature (Max 1MB, JPG/PNG) *</Label>
                <Input 
                  id="signature" 
                  type="file" 
                  accept="image/jpeg,image/png"
                  {...register('signature', { required: 'Signature is required' })} 
                />
                {errors.signature && <p className="text-red-500 text-sm">{errors.signature.message}</p>}
              </div>

              <div>
                <Label htmlFor="idProof">ID Proof (Aadhar/Passport/Driving License) (Max 2MB, PDF) *</Label>
                <Input 
                  id="idProof" 
                  type="file" 
                  accept=".pdf"
                  {...register('idProof', { required: 'ID proof is required' })} 
                />
                {errors.idProof && <p className="text-red-500 text-sm">{errors.idProof.message}</p>}
              </div>

              <div>
                <Label htmlFor="qualificationProof">Qualification Proof (Max 5MB, PDF) *</Label>
                <Input 
                  id="qualificationProof" 
                  type="file" 
                  accept=".pdf"
                  {...register('qualificationProof', { required: 'Qualification proof is required' })} 
                />
                {errors.qualificationProof && <p className="text-red-500 text-sm">{errors.qualificationProof.message}</p>}
              </div>

              <div>
                <Label htmlFor="experienceProof">Experience Certificate (Max 5MB, PDF)</Label>
                <Input 
                  id="experienceProof" 
                  type="file" 
                  accept=".pdf"
                  {...register('experienceProof')} 
                />
              </div>
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
              Thank you for applying for Ordinary Membership. Your application has been received and is being processed.
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
