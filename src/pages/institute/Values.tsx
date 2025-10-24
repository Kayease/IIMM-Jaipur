import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home2.png";

export default function ValuesPage() {
  const coreValues = [
    {
      title: "Professional Excellence",
      description: "We are committed to maintaining the highest standards of professional practice in materials management, ensuring our members and students receive world-class education and training.",
      icon: "🎯"
    },
    {
      title: "Integrity & Ethics",
      description: "We uphold the highest ethical standards in all our activities, fostering a culture of transparency, honesty, and accountability in materials management practices.",
      icon: "⚖️"
    },
    {
      title: "Innovation & Adaptability",
      description: "We embrace innovation and continuous improvement, adapting to the evolving needs of the industry and integrating new technologies in materials management education.",
      icon: "💡"
    },
    {
      title: "Collaboration & Networking",
      description: "We believe in the power of collaboration, fostering strong relationships among professionals, industry, and academia to advance the field of materials management.",
      icon: "🤝"
    },
    {
      title: "Sustainability",
      description: "We are committed to promoting sustainable practices in materials management that contribute to environmental conservation and social responsibility.",
      icon: "🌱"
    },
    {
      title: "Inclusivity",
      description: "We value diversity and are committed to creating an inclusive environment that respects and values different perspectives and backgrounds.",
      icon: "🌍"
    },
    {
      title: "Lifelong Learning",
      description: "We promote continuous professional development and lifelong learning to ensure our members stay at the forefront of materials management practices.",
      icon: "📚"
    },
    {
      title: "National Development",
      description: "We are dedicated to contributing to India's economic growth by developing skilled professionals who can drive efficiency and innovation in materials management.",
      icon: "🇮🇳"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <InstituteHero
        title="IIMM Values"
        subtitle="Guiding Principles of Our Institution"
        image={heroImage}
      />
      
      <div className="max-w-5xl mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-primary text-center">Our Core Values</h2>
          
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              At the heart of the Indian Institute of Materials Management are the core values that guide our actions, 
              shape our culture, and define our approach to materials management education and professional development.
            </p>
            <p className="text-gray-700">
              Our values reflect our commitment to excellence, integrity, and the advancement of the materials management profession.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "To Promote Professional Excellence in Materials Management towards National Prosperity through Sustainable Development"
              </blockquote>
              <p className="text-gray-700">
                This mission statement encapsulates our commitment to developing world-class professionals 
                who can contribute to India's growth while maintaining sustainable practices in materials management.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-primary text-center">Our Approach</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">1</div>
                <h4 className="font-semibold mb-2">Quality Education</h4>
                <p className="text-gray-700 text-sm">Delivering comprehensive and industry-relevant materials management education</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">2</div>
                <h4 className="font-semibold mb-2">Professional Development</h4>
                <p className="text-gray-700 text-sm">Providing continuous learning opportunities for career advancement</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">3</div>
                <h4 className="font-semibold mb-2">Industry Connect</h4>
                <p className="text-gray-700 text-sm">Bridging the gap between academia and industry requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
