import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  membershipType: string;
  title: string;
  firstName: string;
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

export default function ApplicationForms() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);
      setFormData(data);
      setIsSubmitting(false);
      setCurrentStep(3); // Move to success step
    }, 2000);
  };

  const nextStep = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const membershipType = watch('membershipType');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Membership Application</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground">
          Complete the form below to apply for IIMM membership
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between max-w-2xl mx-auto mb-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentStep - 1) * 50}%` }}
          ></div>
        </div>
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= step ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {step}
            </div>
            <span className="text-sm mt-2">
              {step === 1 ? 'Personal Info' : step === 2 ? 'Documents' : 'Complete'}
            </span>
          </div>
        ))}
      </div>

      {currentStep === 1 && (
        <form onSubmit={handleSubmit(nextStep)} className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Membership Type *</label>
                <select
                  {...register('membershipType', { required: 'Please select membership type' })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/50 focus:border-primary"
                >
                  <option value="">Select Membership Type</option>
                  <option value="student">Student Member</option>
                  <option value="associate">Associate Member</option>
                  <option value="full">Full Member</option>
                  <option value="institutional">Institutional Member</option>
                </select>
                {errors.membershipType && (
                  <p className="text-red-500 text-sm mt-1">{errors.membershipType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Title *</label>
                <select
                  {...register('title', { required: 'Please select title' })}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-primary/50 focus:border-primary"
                >
                  <option value="">Select Title</option>
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                  <option value="ms">Ms.</option>
                  <option value="dr">Dr.</option>
                </select>
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                )}
              </div>
            </div>

            {/* More form fields would go here */}
            
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 flex items-center"
                disabled={isSubmitting}
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Upload Required Documents</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Passport Size Photograph (JPG/PNG, max 2MB) *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register('photo', { required: 'Photo is required' })}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
                {errors.photo && (
                  <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
                )}
              </div>

              {/* More document upload fields would go here */}
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  {...register('termsAccepted', { 
                    required: 'You must accept the terms and conditions' 
                  })}
                  className="mt-1 mr-2"
                />
                <label htmlFor="termsAccepted" className="text-sm">
                  I hereby declare that the information provided is true and correct to the best of my knowledge.
                  I agree to abide by the rules and regulations of IIMM.
                </label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-sm mt-1">{errors.termsAccepted.message}</p>
                )}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-50 flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  {!isSubmitting && (
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for applying to IIMM membership. Your application is under review.
              We'll contact you via email with further instructions.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print Application
              </button>
              <button
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
