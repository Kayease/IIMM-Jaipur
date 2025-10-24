import BranchDetails from "./BranchDetails";

export default function WestBranch() {
  return (
    <BranchDetails
      name="West Zone"
      address={[
        "Indian Institute of Materials Management",
        "C-3, Everest Chambers",
        "Marol Naka, Andheri East",
        "Mumbai - 400059, Maharashtra"
      ]}
      phone={["+91-22-29271400", "+91-22-29271401"]}
      email="west@iimm.org"
      workingHours="Monday to Saturday, 10:00 AM to 6:30 PM"
      contactPerson="Ms. Meera Deshpande (Zonal Director)"
      description={[
        "The West Zone branch in Mumbai, established in 1976, is one of the most active IIMM branches, serving the western region including Maharashtra, Gujarat, Goa, and Madhya Pradesh. Located in the financial capital of India, we maintain strong ties with corporate houses and industries.",
        "Our branch is equipped with modern training facilities and a comprehensive resource center. We focus on industry-relevant programs and have been instrumental in shaping the careers of numerous supply chain professionals."
      ]}
      services={[
        "Advanced Certification Programs",
        "Corporate Training and Development",
        "International Study Tours",
        "Research and Publications",
        "Placement and Career Services",
        "E-Learning Platform Access",
        "Mentorship Programs",
        "Industry Networking Forums"
      ]}
    />
  );
}
