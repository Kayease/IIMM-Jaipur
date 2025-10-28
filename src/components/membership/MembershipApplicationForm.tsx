import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  membershipType: string;
  qualification: string;
  experience: string;
  organization: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  additionalInfo: string;
};

type MembershipApplicationFormProps = {
  isOpen: boolean;
  onClose: () => void;
  membershipType?: string;
};

export default function MembershipApplicationForm({ 
  isOpen, 
  onClose,
  membershipType = '' 
}: MembershipApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    membershipType: membershipType,
    qualification: '',
    experience: '',
    organization: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    additionalInfo: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.includes('@')) errors.email = 'Valid email is required';
    if (formData.phone.length < 10) errors.phone = 'Valid phone number is required';
    if (!formData.membershipType) errors.membershipType = 'Please select a membership type';
    if (!formData.qualification) errors.qualification = 'Qualification is required';
    if (!formData.experience) errors.experience = 'Experience is required';
    if (!formData.organization) errors.organization = 'Organization is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.pincode.trim()) errors.pincode = 'Pincode is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          membershipType: membershipType,
          qualification: '',
          experience: '',
          organization: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          additionalInfo: ''
        });
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const membershipTypes = [
    'Student Member',
    'Associate Member',
    'Full Member',
    'Institutional Member'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="bg-blue-700 text-white p-6 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Membership Application</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 transition-colors"
              disabled={isSubmitting}
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-blue-100 mt-1">Fill out the form below to apply for IIMM membership</p>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-6">Thank you for your interest in IIMM membership. We'll contact you soon with further details.</p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {formErrors.fullName && <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="+91 98765 43210"
                    disabled={isSubmitting}
                  />
                  {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                </div>

                {/* ✅ FIXED MEMBERSHIP TYPE DROPDOWN */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Membership Type *</label>
                  <select
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.membershipType ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    disabled={isSubmitting} // ✅ fixed (dropdown now opens)
                  >
                    <option value="">Select membership type</option>
                    {membershipTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {formErrors.membershipType && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.membershipType}</p>
                  )}
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Professional Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification *</label>
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.qualification ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="e.g., B.Tech, MBA, etc."
                    disabled={isSubmitting}
                  />
                  {formErrors.qualification && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.qualification}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.experience ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="e.g., 5 years in materials management"
                    disabled={isSubmitting}
                  />
                  {formErrors.experience && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.experience}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Organization *</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.organization ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Company/Institution name"
                    disabled={isSubmitting}
                  />
                  {formErrors.organization && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.organization}</p>
                  )}
                </div>
              </div>

              {/* Address Information */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Address Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${
                      formErrors.address ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Street address"
                    disabled={isSubmitting}
                  />
                  {formErrors.address && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.address}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.city ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      disabled={isSubmitting}
                    />
                    {formErrors.city && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.city}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.state ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      disabled={isSubmitting}
                    />
                    {formErrors.state && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.state}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        formErrors.pincode ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="e.g., 110001"
                      disabled={isSubmitting}
                    />
                    {formErrors.pincode && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.pincode}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Any additional information you'd like to share..."
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
