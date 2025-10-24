import BranchDetails from "./BranchDetails";

export default function NorthBranch() {
  return (
    <BranchDetails
      name="North Zone"
      address={[
        "Indian Institute of Materials Management",
        "3A/6, Siri Fort Institutional Area",
        "August Kranti Marg, New Delhi - 110049"
      ]}
      phone={["+91-11-41045453", "+91-11-41045454"]}
      email="north@iimm.org"
      workingHours="Monday to Saturday, 9:30 AM to 6:00 PM"
      contactPerson="Mr. Rajesh Kumar (Branch Manager)"
      description={[
        "The North Zone branch of IIMM is strategically located in the heart of New Delhi, serving as a hub for materials management professionals across the northern region of India. Established in 1975, our branch has been at the forefront of promoting excellence in materials management.",
        "Our state-of-the-art facility includes a well-stocked library, modern training rooms, and a dedicated research center. We regularly conduct workshops, seminars, and certification programs to enhance professional skills in supply chain and materials management."
      ]}
      services={[
        "Professional Certification Programs",
        "Executive Development Programs",
        "Workshops and Seminars",
        "Industry-Academia Interface Programs",
        "Research and Publications",
        "Placement Assistance",
        "Library and Resource Center",
        "Networking Events"
      ]}
    />
  );
}
