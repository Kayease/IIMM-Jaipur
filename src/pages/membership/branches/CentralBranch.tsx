import BranchDetails from "./BranchDetails";

export default function CentralBranch() {
  return (
    <BranchDetails
      name="Central Zone"
      address={[
        "Indian Institute of Materials Management",
        "A-4, Industrial Area",
        "Sanjay Place, Civil Lines",
        "Prayagraj - 211001, Uttar Pradesh"
      ]}
      phone={["+91-532-2407621", "+91-532-2407622"]}
      email="central@iimm.org"
      workingHours="Monday to Saturday, 9:30 AM to 6:00 PM"
      contactPerson="Mr. Sanjay Verma (Zonal Head)"
      description={[
        "The Central Zone branch, located in Prayagraj, serves the heartland of India, including Uttar Pradesh, Uttarakhand, and parts of Madhya Pradesh. Established in 1982, our branch has been a pioneer in promoting materials management education and professional development in the region.",
        "Our campus includes modern classrooms, a well-equipped library, and seminar halls. We focus on both theoretical knowledge and practical applications through industry collaborations and live projects."
      ]}
      services={[
        "Diploma in Materials Management",
        "Certificate Courses",
        "Faculty Development Programs",
        "Research and Consultancy",
        "Placement Support Services",
        "Digital Library Access",
        "Entrepreneurship Development Programs",
        "Vendor Management Workshops"
      ]}
    />
  );
}
