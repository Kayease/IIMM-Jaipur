import BranchDetails from "./BranchDetails";

export default function SouthBranch() {
  return (
    <BranchDetails
      name="South Zone"
      address={[
        "Indian Institute of Materials Management",
        "No. 24/1, 4th Cross, 3rd Phase",
        "J.P. Nagar, Bengaluru - 560078"
      ]}
      phone={["+91-80-26582745", "+91-80-26582746"]}
      email="south@iimm.org"
      workingHours="Monday to Saturday, 9:00 AM to 5:30 PM"
      contactPerson="Ms. Priya Nair (Branch Head)"
      description={[
        "The South Zone branch in Bengaluru serves as the hub for materials management professionals across South India. Established in 1980, our branch has been instrumental in fostering excellence in supply chain management through various educational and professional development programs.",
        "Our center features modern training facilities, a comprehensive library, and hosts regular industry-academia interactions to bridge the gap between theoretical knowledge and practical applications in materials management."
      ]}
      services={[
        "Professional Certification Courses",
        "Industry-Specific Training Programs",
        "Research and Development Initiatives",
        "Corporate Training Solutions",
        "Placement and Career Services",
        "Digital Learning Resources",
        "International Certification Programs",
        "Vendor Development Programs"
      ]}
    />
  );
}
