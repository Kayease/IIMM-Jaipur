import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home3.png";

const EC20252027 = () => {
  // Executive Committee Members
  const executiveCommittee = [
    { name: "Chairman", designation: "Chairman", email: "chairman@iimmdelhi.org" },
    { name: "Vice Chairman", designation: "Vice Chairman", email: "vicechairman@iimmdelhi.org" },
    { name: "Honorary Secretary", designation: "Honorary Secretary", email: "secretary@iimmdelhi.org" },
    { name: "Honorary Treasurer", designation: "Honorary Treasurer", email: "treasurer@iimmdelhi.org" },
    { name: "Immediate Past Chairman", designation: "Immediate Past Chairman", email: "past.chairman@iimmdelhi.org" },
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
        title="EC 2025-2027"
        subtitle="Executive Committee 2025-2027"
        image={heroImage}
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
              <div className="p-6 md:p-8 border-b border-muted">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground/90 mb-2">
                  Executive Committee (2025-2027)
                </h2>
                <p className="text-muted-foreground">
                  The Executive Committee is responsible for the governance and strategic direction of IIMM Jaipur.
                </p>
                <div className="mt-3 text-sm bg-yellow-50 text-yellow-800 p-3 rounded-md inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info mr-2 flex-shrink-0">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>This is the upcoming Executive Committee for the term 2025-2027. The information will be updated after the elections.</span>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground/90 mb-6 pb-2 border-b border-muted">
                  Office Bearers
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {executiveCommittee.map((member, index) => (
                    <div key={index} className="bg-muted/5 hover:bg-muted/10 transition-colors p-6 rounded-lg border border-muted/20">
                      <div className="h-40 w-full bg-primary/10 rounded-lg mb-4 flex items-center justify-center text-primary/30">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <h4 className="font-heading text-lg font-semibold text-foreground/90">{member.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{member.designation}</p>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="text-sm text-primary hover:underline inline-flex items-center"
                      >
                        {member.email}
                      </a>
                    </div>
                  ))}
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-foreground/90 mb-6 pb-2 border-b border-muted mt-12">
                  Executive Members
                </h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
                  {committeeMembers.map((member, index) => (
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
                  Election Information
                </h2>
                
                <div className="prose max-w-none text-foreground/90 space-y-4">
                  <p>
                    The Executive Committee for 2025-2027 will be elected through a democratic process as per the constitution of IIMM Jaipur. The election process typically includes:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Announcement of election schedule</li>
                    <li>Call for nominations from eligible members</li>
                    <li>Scrutiny of nominations</li>
                    <li>Withdrawal of nominations (if any)</li>
                    <li>Publication of final list of candidates</li>
                    <li>Voting process (if required)</li>
                    <li>Counting of votes and declaration of results</li>
                  </ul>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                    <h3 className="font-heading text-lg font-semibold text-blue-800 mb-2">Eligibility Criteria for Candidates</h3>
                    <ul className="list-disc pl-5 space-y-1 text-blue-700">
                      <li>Must be a life member of IIMM Jaipur in good standing</li>
                      <li>Minimum 5 years of continuous membership</li>
                      <li>Active participation in Institute activities</li>
                      <li>No pending dues or disciplinary actions</li>
                    </ul>
                  </div>
                  
                  <p>
                    For more information about the election process, eligibility criteria, or to submit your nomination, please contact the Election Committee at <a href="mailto:elections@iimmdelhi.org" className="text-primary hover:underline">elections@iimmdelhi.org</a>.
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

export default EC20252027;
