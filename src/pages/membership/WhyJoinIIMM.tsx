export default function WhyJoinIIMM() {
  const benefits = [
    {
      title: "Professional Recognition",
      description: "Gain recognition as a qualified materials management professional and enhance your career prospects.",
      icon: "🏆"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with industry leaders, experts, and peers through IIMM's extensive network.",
      icon: "🤝"
    },
    {
      title: "Professional Development",
      description: "Access to continuous learning programs, workshops, and certification courses.",
      icon: "📚"
    },
    {
      title: "Industry Updates",
      description: "Stay informed about the latest trends, technologies, and best practices in materials management.",
      icon: "📈"
    },
    {
      title: "Career Advancement",
      description: "Access to exclusive job opportunities and career development resources.",
      icon: "💼"
    },
    {
      title: "Research & Publications",
      description: "Get access to IIMM's research papers, journals, and industry reports.",
      icon: "🔍"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Why Join IIMM?</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Become part of India's premier professional body for materials management
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Membership Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Professional certification and accreditation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Access to IIMM's knowledge resources</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Discounts on training programs and events</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Networking with industry professionals</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Career development opportunities</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Subscription to IIMM publications</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
