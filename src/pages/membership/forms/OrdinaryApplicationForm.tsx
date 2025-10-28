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
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setCurrentStep(3);
    }, 2000);
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const steps = [
    { label: 'Personal Details' },
    { label: 'Professional Info' },
    { label: 'Review & Submit' },
  ];

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Ordinary Membership Application
      </h2>

      {/* Step Progress */}
      <div className="flex justify-between mb-10 px-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all ${
                currentStep >= index + 1
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-sm mt-2 text-gray-700 font-medium">
              {step.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Progress line */}
      <div className="relative mb-8">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
              👤 Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <Label>Title *</Label>
                <Select>
                  <SelectTrigger className="w-full">
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
              </div>

              <div>
                <Label>First Name *</Label>
                <Input {...register('firstName', { required: 'First name is required' })} />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>

              <div>
                <Label>Last Name *</Label>
                <Input {...register('lastName', { required: 'Last name is required' })} />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <Label>Gender *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Date of Birth *</Label>
                <Input type="date" {...register('dateOfBirth', { required: true })} />
              </div>

              <div>
                <Label>Phone *</Label>
                <Input
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: { value: /^[0-9]{10}$/, message: 'Enter valid 10-digit number' },
                  })}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label>Email *</Label>
                <Input
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
                <Label>City *</Label>
                <Input {...register('city', { required: 'City is required' })} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <Label>State *</Label>
                <Input {...register('state', { required: 'State is required' })} />
              </div>

              <div>
                <Label>Pincode *</Label>
                <Input
                  {...register('pincode', {
                    required: 'Pincode is required',
                    pattern: { value: /^[0-9]{6}$/, message: 'Enter valid 6-digit pincode' },
                  })}
                />
                {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button type="button" onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next: Professional Info
              </Button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
              💼 Professional Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label>Highest Qualification *</Label>
                <Input {...register('qualification', { required: 'Qualification is required' })} />
              </div>
              <div>
                <Label>Experience (Years) *</Label>
                <Input type="number" {...register('experience', { required: true })} />
              </div>
              <div>
                <Label>Organization *</Label>
                <Input {...register('currentOrganization', { required: true })} />
              </div>
              <div>
                <Label>Designation *</Label>
                <Input {...register('designation', { required: true })} />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="font-semibold text-blue-700">📎 Upload Required Documents</h4>
              <div>
                <Label>Passport Photo (JPG/PNG) *</Label>
                <Input type="file" className="mt-1" {...register('photo', { required: true })} />
              </div>
              <div>
                <Label>Signature (JPG/PNG) *</Label>
                <Input type="file" className="mt-1" {...register('signature', { required: true })} />
              </div>
              <div>
                <Label>ID Proof (PDF) *</Label>
                <Input type="file" className="mt-1" accept=".pdf" {...register('idProof', { required: true })} />
              </div>
            </div>

            <div className="mt-6 flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Checkbox 
                id="terms" 
                {...register('termsAccepted', { required: 'You must accept the terms' })} 
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-gray-700">
                I hereby declare that all the information provided is true to the best of my knowledge. *
              </Label>
            </div>

            <div className="flex justify-between mt-8">
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                className="px-6"
              >
                ← Back
              </Button>
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div className="text-center py-12 bg-white rounded-lg shadow border border-green-100">
            <div className="mx-auto h-20 w-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
              <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Application Submitted Successfully!
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Thank you for applying for Ordinary Membership. Your application has been received and is being processed. 
              You will receive a confirmation email with further instructions shortly.
            </p>
            <Button 
              onClick={() => setCurrentStep(1)} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
            >
              Submit Another Application
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
