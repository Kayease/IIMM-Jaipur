import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";

// Import images
import chairmanImg from "../../assets/images/chairmen.png";
import viceChairmanImg from "../../assets/images/vicecharmen.png";
import secretaryImg from "../../assets/images/Secretary.png";
import treasurerImg from "../../assets/images/treasurer.png";
import pastChairmanImg from "../../assets/images/pastChairmen.png";

const EC20232025 = () => {
  // Executive Committee Members
  const executiveCommittee = [
    { 
      name: "Chairman", 
      designation: "Chairman", 
      email: "chairman@iimmdelhi.org",
      image: chairmanImg
    },
    { 
      name: "Vice Chairman", 
      designation: "Vice Chairman", 
      email: "vicechairman@iimmdelhi.org",
      image: viceChairmanImg
    },
    { 
      name: "Honorary Secretary", 
      designation: "Honorary Secretary", 
      email: "secretary@iimmdelhi.org",
      image: secretaryImg
    },
    { 
      name: "Honorary Treasurer", 
      designation: "Honorary Treasurer", 
      email: "treasurer@iimmdelhi.org",
      image: treasurerImg
    },
    { 
      name: "Immediate Past Chairman", 
      designation: "Immediate Past Chairman", 
      email: "past.chairman@iimmdelhi.org",
      image: pastChairmanImg
    },
  ];

  // Committee Members
  const committeeMembers = [
    { name: "Member 1", designation: "Executive Member" },
    { name: "Member 2", designation: "Executive Member" },
    { name: "Member 3", designation: "Executive Member" },
    { name: "Member 4", designation: "Executive Member" },
    { name: "Member 5", designation: "Executive Member" },
    { name: "Member 6", designation: "Executive Member" },
    { name: "Member 7", designation: "Executive Member" },
    { name: "Member 8", designation: "Executive Member" },
    { name: "Member 9", designation: "Executive Member" },
    { name: "Member 10", designation: "Executive Member" },
    { name: "Member 11", designation: "Executive Member" },
    { name: "Member 12", designation: "Executive Member" },
  ];

  // Co-opted Members
  const cooptedMembers = [
    { name: "Co-opted Member 1", designation: "Co-opted Member" },
    { name: "Co-opted Member 2", designation: "Co-opted Member" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background to-muted/30">
      <InstituteHero
        title="EC 2023-2025"
        subtitle="Executive Committee 2023-2025"
        image={heroImage}
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
              <div className="p-6 md:p-8 border-b border-muted">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground/90 mb-2">
                  Executive Committee (2023-2025)
                </h2>
                <p className="text-muted-foreground">
                  The Executive Committee is responsible for the governance and strategic direction of IIMM Jaipur.
                </p>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground/90 mb-6 pb-2 border-b border-muted">
                  Office Bearers
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {executiveCommittee.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-muted/5 rounded-lg hover:bg-muted/10 transition-colors">
                      <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden mb-4">
                        {member.image ? (
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23e0e7ff%22%2F%3E%3Ctext%20x%3D%2250%22%20y%3D%2255%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20text-anchor%3D%22middle%22%20fill%3D%222563eb%22%3E' + 
                              encodeURIComponent(member.name.split(' ')[0].charAt(0) + (member.name.split(' ')[1] ? member.name.split(' ')[1].charAt(0) : '')) + 
                              '%3C%2Ftext%3E%3C%2Fsvg%3E';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-primary/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                        )}
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground/90">{member.name}</h3>
                      <p className="text-muted-foreground mb-3">{member.designation}</p>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        Email
                      </a>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground/90 mb-6 pb-2 border-b border-muted">
                  Co-opted Members
                </h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cooptedMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 hover:bg-muted/10 rounded-md transition-colors">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground/90">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 md:p-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground/90 mb-4">
                  Committee Responsibilities
                </h2>
                
                <div className="prose max-w-none text-foreground/90 space-y-4">
                  <p>
                    The Executive Committee is the governing body of IIMM Jaipur and is responsible for:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Setting the strategic direction and policies of the Institute</li>
                    <li>Overseeing the financial health and sustainability of the organization</li>
                    <li>Approving and monitoring programs and initiatives</li>
                    <li>Ensuring compliance with legal and regulatory requirements</li>
                    <li>Representing the interests of the members and stakeholders</li>
                    <li>Promoting the objectives and values of IIMM</li>
                  </ul>
                  
                  <p>
                    The Committee meets regularly to review progress, make decisions, and provide guidance on the Institute's activities and future direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EC20232025;
