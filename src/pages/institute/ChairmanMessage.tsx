import { Mail, Phone } from "lucide-react";
import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home2.png";

// Import chairman's profile image
import chairmanImage from "@/assets/images/chairmen.png";

const ChairmanMessage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background to-muted/30">
      <InstituteHero
        title="Chairman's Message"
        subtitle="A Message from the Chairman of IIMM Jaipur"
        image={heroImage}
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Chairman's Photo and Basic Info */}
            <div className="bg-primary/5 p-6 md:p-8 border-b border-muted">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <img 
                    src={chairmanImage}
                    alt="Chairman, IIMM Jaipur" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a default user icon if the image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 24 24' fill='none' stroke='%23d1d5db' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="text-center md:text-left mt-4 md:mt-0">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground/90">
                    Mr. [Chairman's Name]
                  </h2>
                  <p className="text-lg text-foreground/80 mt-1">Chairman, IIMM Delhi</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    [Designation], [Company/Organization]
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    [Designation], [Company/Organization]
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                    <a 
                      href="mailto:chairman@iimmdelhi.org" 
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Mail size={16} />
                      chairman@iimmdelhi.org
                    </a>
                    <a 
                      href="tel:+911141354969" 
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Phone size={16} />
                      +91 11 41354969
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chairman's Message */}
            <div className="p-6 md:p-8">
              <div className="prose max-w-none text-foreground/90 space-y-6">
                <p className="text-lg leading-relaxed">
                  Dear Members and Visitors,
                </p>
                
                <p className="leading-relaxed">
                  It is with great pleasure and a deep sense of responsibility that I address you as the Chairman of the Indian Institute of Materials Management (IIMM) Delhi. For over five decades, IIMM has been at the forefront of promoting excellence in materials management, and it is an honor to lead this esteemed institution into its next chapter of growth and innovation.
                </p>
                
                <p className="leading-relaxed">
                  In today's rapidly evolving business landscape, the role of materials management has never been more critical. As organizations navigate complex supply chains, sustainability challenges, and technological disruptions, the need for skilled professionals who can optimize resources and drive operational excellence has become paramount.
                </p>
                
                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                  <blockquote className="italic text-foreground/90">
                    "Our vision is to be the premier institution for materials management education and professional development, empowering individuals and organizations to achieve operational excellence through innovation, ethical practices, and continuous learning."
                  </blockquote>
                </div>
                
                <p className="leading-relaxed">
                  At IIMM Delhi, we are committed to providing world-class education, training, and professional development opportunities that equip our members with the knowledge and skills needed to excel in this dynamic field. Our comprehensive curriculum, experienced faculty, and industry partnerships ensure that our programs remain relevant and aligned with the latest industry trends and best practices.
                </p>
                
                <p className="leading-relaxed">
                  As we look to the future, we remain steadfast in our commitment to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Expanding our academic offerings to address emerging trends in supply chain and materials management</li>
                  <li>Strengthening industry-academia collaboration to bridge the gap between theory and practice</li>
                  <li>Promoting research and innovation in materials management</li>
                  <li>Enhancing the professional development and networking opportunities for our members</li>
                  <li>Fostering a culture of ethical practices and sustainability in materials management</li>
                </ul>
                
                <p className="leading-relaxed">
                  I invite you to explore our programs, participate in our events, and join our vibrant community of materials management professionals. Together, we can shape the future of this critical business function and create lasting value for organizations and society at large.
                </p>
                
                <p className="leading-relaxed">
                  Thank you for your continued support and trust in IIMM Delhi.
                </p>
                
                <div className="mt-8">
                  <p className="font-semibold">Warm regards,</p>
                  <div className="mt-2">
                    <div className="h-12 w-48 border-t-2 border-primary mt-2"></div>
                    <p className="font-heading text-lg font-semibold mt-2">[Chairman's Name]</p>
                    <p>Chairman, IIMM Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanMessage;
