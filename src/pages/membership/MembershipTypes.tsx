import { useState } from "react";
import MembershipApplicationForm from "@/components/membership/MembershipApplicationForm";

export default function MembershipTypes() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState("");

  const membershipTypes = [
    {
      type: "Student Member",
      fee: "2,500",
      period: "per year",
      description:
        "For students pursuing materials management or related courses.",
      eligibility: [
        "Currently enrolled in a recognized educational institution",
        "Pursuing materials management or related field",
      ],
      benefits: [
        "Access to student resources",
        "Discounted event rates",
        "Student chapter participation",
      ],
    },
    {
      type: "Associate Member",
      fee: "5,000",
      period: "per year",
      description: "For professionals with less than 5 years of experience.",
      eligibility: [
        "Degree/diploma in materials management or related field",
        "Working in materials management or related area",
      ],
      benefits: [
        "Professional development opportunities",
        "Networking events",
        "Access to IIMM resources",
      ],
    },
    {
      type: "Full Member",
      fee: "7,500",
      period: "per year",
      description:
        "For experienced professionals in materials management and supply chain.",
      eligibility: [
        "Degree/diploma in materials management",
        "Minimum 5 years of relevant experience",
      ],
      benefits: [
        "Full voting rights",
        "Eligibility for leadership positions",
        "All associate member benefits",
      ],
      featured: true,
    },
    {
      type: "Institutional Member",
      fee: "25,000",
      period: "per year",
      description: "For organizations and educational institutions.",
      eligibility: [
        "Registered organization in related field",
        "Commitment to professional development",
      ],
      benefits: [
        "Up to 5 nominated members",
        "Organizational recognition",
        "Custom training programs",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          Types of Membership
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Select the membership plan that best fits your goals and level of
          professional experience.
        </p>
      </div>

      {/* Membership Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {membershipTypes.map((membership, index) => (
          <div
            key={index}
            className={`relative bg-white border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between ${
              membership.featured ? "border-blue-600 shadow-lg" : "border-gray-200"
            }`}
          >
            {membership.featured && (
              <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 font-semibold rounded-t-2xl">
                ⭐ RECOMMENDED
              </div>
            )}

            <div className="p-6 pt-10 flex-grow flex flex-col">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                {membership.type}
              </h3>
              <p className="text-center text-gray-600 mb-4">
                {membership.description}
              </p>

              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  ₹{membership.fee}
                </span>
                <span className="text-gray-500">/{membership.period}</span>
              </div>

              <div className="mb-5">
                <h4 className="font-semibold mb-2 text-gray-800">Eligibility:</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {membership.eligibility.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-gray-800">Benefits:</h4>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {membership.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-2.5 rounded-md mt-auto transition-all duration-200 font-medium ${
                  membership.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
                onClick={() => {
                  setSelectedMembership(membership.type);
                  setIsFormOpen(true);
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

   
      {/* Membership Form Modal */}
      <MembershipApplicationForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedMembership("");
        }}
        membershipType={selectedMembership}
      />
    </div>
  );
}
