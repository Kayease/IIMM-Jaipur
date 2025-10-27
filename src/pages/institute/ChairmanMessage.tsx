import { Mail, Phone } from "lucide-react";
import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home2.png";

// Import chairman's profile image
import chairmanImage from "@/assets/chairman.png";

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
                    className="w-full h-full object-conver"
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
                    Mr. Pankaj Gupta
                  </h2>
                  <p className="text-lg text-foreground/80 mt-1">Chairman, IIMM Jaipur</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    [Designation], [Company/Organization]
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    [Designation], [Company/Organization]
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                    <a
                      href="mailto:chairman@iimmjaipur.org"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Mail size={16} />
                      chairman@iimmjaipur.org
                    </a>
                    <a
                      href="tel:+911141354969"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Phone size={16} />
                      +91 9414075879 
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Chairman's Message */}
            <div className="p-6 md:p-8">
              <div className="prose max-w-none text-foreground/90 space-y-6">
                <p className="text-lg leading-relaxed">
                  Dear Members, Materials Management & Supply Chain Professionals,
                </p>

                <p className="leading-relaxed">
                  It is a great honor and privilege to serve as the Chairman of the <b>Indian Institute of Materials Management (IIMM) – Jaipur Chapter</b> I am deeply grateful for the trust and confidence you have placed in me.
                </p>

                <p className="leading-relaxed">
                  With over <b>36 years of global experience</b>  across India, China,
                  and international supply chain ecosystems, I have witnessed how our profession
                  has evolved from a traditional support activity into a  <b>strategic powerhouse</b>— ensuring industry excellence,
                  customer satisfaction, and national competitiveness.
                </p>

                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                  <blockquote className="italic text-foreground/90">
                  A strong supply chain doesn’t follow growth — it enables it,
                  accelerates it, and secures it for the future.
                  </blockquote>
                </div>



                <p className="leading-relaxed">
                  In an era defined by uncertainty, transformation, and digital disruption,
                  our focus must be on:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Advancing modern procurement and inventory excellence</li>
                  <li>Strengthening industry-academia collaboration to bridge the gap between theory and practice</li>
                  <li>Driving innovation through digitalization</li>
                  <li>Enhancing global sourcing and supplier collaboration</li>
                  <li>Strengthening academia–industry partnerships</li>
                  <li>Empowering young talent with future-ready skills</li>
                  <li>Building resilience and sustainability across value chains</li>

                </ul>


                <p>My vision is to position <b>IIMM Jaipur Chapter</b> as a hub of:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional development and continuous learning</li>
                  <li>Global benchmarking and adoption of best practices</li>
                  <li>Collaboration across industries and supply networks</li>
                  <li>Leadership in shaping India’s supply chain future</li>
                </ul>

                <p className="leading-relaxed" >Together, we will elevate the role and recognition of
                  <b>Materials Management & Supply Chain</b> as a key pillar
                  in driving India’s industrial growth and global competitiveness.</p>

                <p className="leading-relaxed" >I look forward to working closely with each one of you as we take our chapter
                  to greater heights of relevance, innovation, and impact.</p>




                <p className="leading-relaxed">
                  Thank you for your continued support and trust in IIMM jaipur.
                </p>

                <div className="mt-8">
                  <p className="font-semibold">Warm regards,</p>
                  <div className="mt-2">
                    <div className="h-12 w-48 border-t-2 border-primary mt-2"></div>
                    <p className="font-heading text-lg font-semibold mt-2">Mr. Pankaj Gupta</p>
                    <p>Chairman – IIMM Jaipur Chapter</p>
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
