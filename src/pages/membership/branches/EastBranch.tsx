import BranchDetails from "./BranchDetails";

export default function EastBranch() {
  return (
    <BranchDetails
      name="East Zone"
      address={[
        "Indian Institute of Materials Management",
        "P-43, Princep Street",
        "Kolkata - 700072, West Bengal"
      ]}
      phone={["+91-33-22375123", "+91-33-22375124"]}
      email="east@iimm.org"
      workingHours="Monday to Saturday, 9:30 AM to 6:00 PM"
      contactPerson="Mr. Amitava Bose (Regional Head)"
      description={[
        "The East Zone branch in Kolkata has been serving the materials management community since 1978. Strategically located in the business district, we cater to professionals across Eastern India, including West Bengal, Odisha, Bihar, Jharkhand, and the North-Eastern states.",
        "Our branch is known for its strong industry connections and regularly organizes seminars, workshops, and training programs featuring industry experts. We also collaborate with local industries for practical training and research projects."
      ]}
      services={[
        "Professional Certification in Materials Management (PCMM)",
        "Executive Development Programs",
        "Customized Corporate Training",
        "Research and Consultancy Services",
        "Job Placement Assistance",
        "Library with Digital Resources",
        "Industry Visits and Case Studies",
        "Alumni Networking Events"
      ]}
    />
  );
}
