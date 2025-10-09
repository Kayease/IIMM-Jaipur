import { Link } from "react-router-dom";
import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home3.png";

const Mission = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background to-muted/30">
      <InstituteHero
        title="Our Mission"
        subtitle="Guiding Principles and Vision of IIMM Jaipur"
        image={heroImage}
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 bg-white rounded-xl shadow-sm p-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Our Mission Statement</h2>
              <div className="prose max-w-none text-foreground/90 space-y-4">
                <p>
                  The Indian Institute of Materials Management (IIMM) Jaipur is committed to advancing the profession of materials management and related fields through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Promoting excellence in education, training, and research in materials management</li>
                  <li>Developing professional standards and ethical practices in the field</li>
                  <li>Fostering collaboration between industry, academia, and government</li>
                  <li>Providing a platform for knowledge sharing and professional development</li>
                  <li>Advocating for the recognition of materials management as a critical business function</li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-muted">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Our Vision</h2>
              <div className="prose max-w-none text-foreground/90 space-y-4">
                <p>
                  To be the premier professional body for materials management in India, recognized for our commitment to excellence, innovation, and ethical practices in the field.
                </p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-muted">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Excellence",
                    description: "We strive for the highest standards in all our programs and services."
                  },
                  {
                    title: "Integrity",
                    description: "We uphold the highest ethical standards and professional conduct."
                  },
                  {
                    title: "Innovation",
                    description: "We embrace new ideas and approaches to advance the field."
                  },
                  {
                    title: "Collaboration",
                    description: "We believe in working together to achieve common goals."
                  },
                  {
                    title: "Inclusivity",
                    description: "We value diversity and are committed to equal opportunities for all."
                  },
                  {
                    title: "Service",
                    description: "We are dedicated to serving our members and the broader community."
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-foreground/90">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
