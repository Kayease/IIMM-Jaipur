import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";

const Ethics = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background to-muted/30">
      <InstituteHero
        title="Code of Ethics"
        subtitle="Professional Standards and Ethical Guidelines"
        image={heroImage}
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 bg-white rounded-xl shadow-sm p-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Preamble</h2>
              <div className="prose max-w-none text-foreground/90 space-y-4">
                <p>
                  The Indian Institute of Materials Management (IIMM) is committed to maintaining the highest standards of professional conduct among its members. This Code of Ethics sets forth the principles and standards that guide the professional conduct of all IIMM members.
                </p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-muted">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Code of Ethics</h2>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Integrity and Honesty",
                    content: "Members shall conduct all professional activities with honesty, integrity, and fairness, and shall not engage in any conduct that would bring discredit to the profession."
                  },
                  {
                    title: "Professional Competence",
                    content: "Members shall maintain and enhance their professional knowledge and skills to ensure the highest level of professional competence in their work."
                  },
                  {
                    title: "Confidentiality",
                    content: "Members shall respect and protect the confidentiality of information acquired in the course of their professional activities and shall not use such information for personal advantage."
                  },
                  {
                    title: "Conflict of Interest",
                    content: "Members shall avoid conflicts of interest and disclose any potential conflicts to all affected parties."
                  },
                  {
                    title: "Fair Business Practices",
                    content: "Members shall engage in fair business practices and shall not engage in any activities that would constitute bribery, corruption, or anti-competitive practices."
                  },
                  {
                    title: "Compliance with Laws",
                    content: "Members shall comply with all applicable laws, regulations, and professional standards governing their professional activities."
                  },
                  {
                    title: "Respect for Others",
                    content: "Members shall treat all individuals with respect and dignity, and shall not engage in any form of discrimination or harassment."
                  },
                  {
                    title: "Environmental Responsibility",
                    content: "Members shall promote sustainable and environmentally responsible practices in materials management."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-muted/10 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="font-heading text-xl font-semibold text-foreground/90 mb-2">
                      {index + 1}. {item.title}
                    </h3>
                    <p className="text-foreground/90">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-muted">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Enforcement</h2>
              <div className="prose max-w-none text-foreground/90 space-y-4">
                <p>
                  The IIMM is committed to enforcing this Code of Ethics. Members who violate these ethical standards may be subject to disciplinary action, including revocation of membership, in accordance with the Institute's bylaws and procedures.
                </p>
                <p>
                  Members are encouraged to report any suspected violations of this Code to the appropriate IIMS authorities. The Institute will protect the confidentiality of individuals who report violations in good faith.
                </p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-muted">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Conclusion</h2>
              <div className="prose max-w-none text-foreground/90 space-y-4">
                <p>
                  This Code of Ethics reflects the commitment of IIMM members to uphold the highest standards of professional conduct. By adhering to these principles, members contribute to the integrity and reputation of the materials management profession.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ethics;
