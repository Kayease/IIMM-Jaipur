export default function MembershipTypes() {
  const membershipTypes = [
    {
      type: "Student Member",
      fee: "2,500",
      period: "per year",
      description: "For students pursuing materials management or related courses",
      eligibility: [
        "Currently enrolled in a recognized educational institution",
        "Pursuing materials management or related field"
      ],
      benefits: [
        "Access to student resources",
        "Discounted event rates",
        "Student chapter participation"
      ]
    },
    {
      type: "Associate Member",
      fee: "5,000",
      period: "per year",
      description: "For professionals with less than 5 years of experience",
      eligibility: [
        "Degree/diploma in materials management or related field",
        "Working in materials management or related area"
      ],
      benefits: [
        "Professional development opportunities",
        "Networking events",
        "Access to IIMM resources"
      ]
    },
    {
      type: "Full Member",
      fee: "7,500",
      period: "per year",
      description: "For experienced professionals in materials management",
      eligibility: [
        "Degree/diploma in materials management",
        "Minimum 5 years of relevant experience"
      ],
      benefits: [
        "Full voting rights",
        "Eligibility for leadership positions",
        "All associate member benefits"
      ],
      featured: true
    },
    {
      type: "Institutional Member",
      fee: "25,000",
      period: "per year",
      description: "For organizations and educational institutions",
      eligibility: [
        "Registered organization in related field",
        "Commitment to professional development"
      ],
      benefits: [
        "Up to 5 nominated members",
        "Organizational recognition",
        "Custom training programs"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Types of Membership</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground">
          Choose the membership that best suits your professional needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {membershipTypes.map((membership, index) => (
          <div 
            key={index}
            className={`border rounded-lg overflow-hidden ${
              membership.featured ? 'border-2 border-primary shadow-lg' : 'border-gray-200'
            }`}
          >
            {membership.featured && (
              <div className="bg-primary text-white text-center py-2 font-medium">
                RECOMMENDED
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-2">{membership.type}</h3>
              <p className="text-center text-muted-foreground mb-4">{membership.description}</p>
              
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">₹{membership.fee}</span>
                <span className="text-muted-foreground">/{membership.period}</span>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Eligibility:</h4>
                <ul className="space-y-2 text-sm">
                  {membership.eligibility.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-2 text-sm">
                  {membership.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-2 rounded-md ${
                  membership.featured 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'border border-primary text-primary hover:bg-primary/10'
                }`}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Not sure which membership is right for you?</h2>
        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our membership team is here to help you choose the best option for your professional development needs.
        </p>
        <div className="flex justify-center">
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90">
            Contact Membership Team
          </button>
        </div>
      </div>
    </div>
  );
}
