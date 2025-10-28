import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setCurrentStep(3);
    }, 2000);
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-5xl mx-auto my-12 p-6 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Institutional Membership Application
      </h2>

      {/* Step Progress */}
      <div className="flex justify-between mb-10 px-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all ${
                currentStep >= step
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
            <span className="text-sm mt-2 text-gray-700 font-medium">
              {step === 1
                ? "Institution Info"
                : step === 2
                ? "Contact Details"
                : "Confirmation"}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
              🏫 Institution Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="institutionName">Institution Name *</Label>
                <Input
                  id="institutionName"
                  {...register("institutionName", {
                    required: "Institution name is required",
                  })}
                />
                {errors.institutionName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.institutionName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="institutionType">Institution Type *</Label>
                <select
                  id="institutionType"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-500"
                  {...register("institutionType", {
                    required: "Institution type is required",
                  })}
                >
                  <option value="">Select type</option>
                  <option value="university">University</option>
                  <option value="college">College</option>
                  <option value="school">School</option>
                  <option value="research">Research Institute</option>
                  <option value="training">Training Institute</option>
                  <option value="other">Other</option>
                </select>
                {errors.institutionType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.institutionType.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="yearOfEstablishment">
                  Year of Establishment *
                </Label>
                <Input
                  id="yearOfEstablishment"
                  type="number"
                  min="1800"
                  max={currentYear}
                  {...register("yearOfEstablishment", {
                    required: "Year of establishment is required",
                    min: { value: 1800, message: "Enter a valid year" },
                    max: {
                      value: currentYear,
                      message: "Year cannot be in the future",
                    },
                  })}
                />
                {errors.yearOfEstablishment && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.yearOfEstablishment.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="registrationNumber">
                  Registration Number *
                </Label>
                <Input
                  id="registrationNumber"
                  {...register("registrationNumber", {
                    required: "Registration number is required",
                  })}
                  placeholder="e.g., UGC/ABC/12345"
                />
                {errors.registrationNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.registrationNumber.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="facultyCount">Faculty Members *</Label>
                <Input
                  id="facultyCount"
                  type="number"
                  {...register("facultyCount", {
                    required: "Faculty count is required",
                    min: { value: 1, message: "Must have at least 1" },
                  })}
                />
                {errors.facultyCount && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.facultyCount.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="studentCount">Students *</Label>
                <Input
                  id="studentCount"
                  type="number"
                  {...register("studentCount", {
                    required: "Student count is required",
                    min: { value: 1, message: "Must have at least 1" },
                  })}
                />
                {errors.studentCount && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.studentCount.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="aboutInstitution">About the Institution *</Label>
                <textarea
                  id="aboutInstitution"
                  rows={3}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                  {...register("aboutInstitution", {
                    required: "About institution is required",
                  })}
                ></textarea>
                {errors.aboutInstitution && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.aboutInstitution.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="facilities">Facilities Available *</Label>
                <textarea
                  id="facilities"
                  rows={3}
                  placeholder="Library, labs, sports, etc."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                  {...register("facilities", {
                    required: "Facilities information is required",
                  })}
                ></textarea>
                {errors.facilities && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.facilities.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="coursesOffered">Courses Offered *</Label>
                <textarea
                  id="coursesOffered"
                  rows={3}
                  placeholder="List of courses offered by the institution"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                  {...register("coursesOffered", {
                    required: "Courses information is required",
                  })}
                ></textarea>
                {errors.coursesOffered && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.coursesOffered.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next: Contact Information →
              </Button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow p-6 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b pb-2">
              📞 Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  id="contactPerson"
                  {...register("contactPerson", {
                    required: "Contact person name is required",
                  })}
                />
                {errors.contactPerson && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contactPerson.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="designation">Designation *</Label>
                <Input
                  id="designation"
                  {...register("designation", {
                    required: "Designation is required",
                  })}
                />
                {errors.designation && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.designation.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://example.com"
                  {...register("website")}
                />
              </div>
            </div>

            <div className="mt-5">
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  {...register("city", { required: "City is required" })}
                />
              </div>

              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  {...register("state", { required: "State is required" })}
                />
              </div>

              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  {...register("pincode", {
                    required: "Pincode is required",
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: "Enter a valid 6-digit pincode",
                    },
                  })}
                />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <h4 className="font-semibold text-blue-700">
                📎 Upload Documents
              </h4>

              <div>
                <Label htmlFor="registrationProof">
                  Registration Certificate (PDF) *
                </Label>
                <Input
                  id="registrationProof"
                  type="file"
                  accept=".pdf"
                  {...register("registrationProof", {
                    required: "Registration proof is required",
                  })}
                />
              </div>

              <div>
                <Label htmlFor="institutionLogo">
                  Institution Logo (PNG/JPG)
                </Label>
                <Input
                  id="institutionLogo"
                  type="file"
                  accept="image/*"
                  {...register("institutionLogo")}
                />
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <Checkbox
                  id="terms"
                  {...register("termsAccepted", {
                    required: "You must accept the terms",
                  })}
                />
                <Label htmlFor="terms" className="text-sm">
                  I hereby declare all information provided is true. *
                </Label>
              </div>
              {errors.termsAccepted && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.termsAccepted.message}
                </p>
              )}
            </div>

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={prevStep}>
                ← Back
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div className="text-center py-12 bg-white rounded-lg shadow border border-blue-100">
            <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-green-100">
              <svg
                className="h-7 w-7 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-green-700">
              Application Submitted Successfully!
            </h3>
            <p className="mt-2 text-gray-600 max-w-md mx-auto">
              Thank you for applying for Institutional Membership. Your
              application has been received and is being processed. You will
              receive an email shortly with further details.
            </p>
            <div className="mt-6">
              <Button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
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
