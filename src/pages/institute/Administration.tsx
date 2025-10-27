import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home2.png";
import { Mail, Phone } from "lucide-react";

export default function AdministrationPage() {
  const nhqContacts = [
    {
      title: "National Headquarter",
      address: "IIMM House, Plot No. 6, Sector 12, Kharghar, Navi Mumbai - 410210",
      phone: "+91-22-27702626 / 27702727",
      email: "iimmnhq@gmail.com",
    },
    {
      title: "Jaipur Branch",
      address: `48, Mohan Nagar,
Gopalpura Bypass,
Jaipur – 302001,
Rajasthan, India`,
      phone: "09799299157",
      email: "iimmjaipur1@gmail.com",
    },
  ];

  const executiveCommittee = [
    {
      role: "CHAIRMAN",
      name: "Mr. Pankaj Gupta",
      company: "AASHITA ENTERPRISES.",
      email: "pankaj_66@yahoo.com",
      phone: "9414075879",
      address: " c-228 HANUMAN NAGAR ,VAISHALI NAGAR ,JAIPUR- 302021",
      color: "bg-blue-100",
    },
    {
      role: "VICE CHAIRMAN",
      name: "MR. SUNEEL DUTT GOYAL", 
      company: "DIRECTOR GENERAL IMPERIAL CHAMBER OF COMM & INDUSTRY",
      email: "suneelduttgoyal@gamil.com",
      phone: "9414063537",
      address: "4, VISHNU PATH SATYA VIHAR LAL KOTHI JAIPUR(RAJ).",
      color: "bg-teal-100",
    },
    {
      role: "HONY. SECRETARY",
      name: "MR. DHIRENDRA MALHOTRA",
      company: "SHRIRAM PISTONS & RINGS LTD",
      email: "DHIR19BHL@GMAIL.COM",
      phone: "9799299157",
      address: "GANAPATI RESIDENCY B-19, OPP: GORSI PUB  SCHOOL SHANTI NAGAR  GURJAR KI TAHAD JAIPUR - 302019",
      color: "bg-pink-100",
    },
    {
      role: "HONY. TREASURER",
      name: "MR. LALIT AHUJA",
      company: "AHUJA GROUP",
      email: "Lalit@ahujagroup.in",
      phone: "9829229943",
      address: "A-185, RIICO PRAHLADPURA INDUSTRIAL AREA, NEAR SHIVDASPURA, TONK ROAD, NEAR DAINIK BHASKAR PRESS, JAIPUR 302022 RAJASTHAN",
      color: "bg-green-100",
    },
    {
      role: "NATIONAL COUNCILOR",
      name: "MR. PURUSHOTTAM KHANDELWAL",
      company: "CONSULTANT",
      email: "khandelwal.bosch@gmail.com",
      phone: "9001893395",
      address: "48, MOHAN NAGAR GOPALPURA BY PASS JAIPUR RAJASTHAN",
      color: "bg-yellow-100",
    },
    {
      role: "EXECUTIVE MEMBERS",
      name: "MR. SHAILENDRA KUMAR SHARMA",
      company: "DIRECTOR, IDZN (P) LTD",
      email: "sk400003@gmail.com",
      phone: "9928704813",
      address: "A-286, CHINAB PATH KHIRANI PHATAK ROAD TARA NAGAR-A, JHOTWARA JAIPUR -302012",
      color: "bg-indigo-100",
    },
    {
      role: "EXECUTIVE MEMBERS",
      name: "MR. RADHA RAMAN SHARMA",
      company: "GM-QA, S.G. ENGINEERING",
      email: "rrsharma.2006@rediffmail.com",
      phone: "9414056625",
        address: "67/33, PRATAP NAGAR SANGAUER JAIPUR",
        color: "bg-pink-100",
    },



  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <InstituteHero
        title="Administration"
        subtitle="IIMM Jaipur Branch – Leadership & Contact Information"
        image={heroImage}
      />

      {/* Overview */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
          Administrative Overview
        </h2>
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          The Indian Institute of Materials Management (IIMM) is managed by a
          team of dedicated professionals who oversee all academic, administrative,
          and developmental functions. The Jaipur Branch operates under the
          guidance of the National Executive Committee and is committed to
          maintaining excellence in materials management education.
        </p>
      </section>

      {/* NHQ & Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 px-6">
          {nhqContacts.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md p-6 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-2">{item.address}</p>
              <p className="flex items-center text-gray-700 gap-2">
                <Phone className="w-4 h-4 text-blue-600" /> {item.phone}
              </p>
              <p className="flex items-center text-gray-700 gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <a
                  href={`mailto:${item.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {item.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Newly Elected Executive Committee (2025–27) – IIMM Jaipur Branch
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {executiveCommittee.map((member, index) => (
              <div
                key={index}
                className={`${member.color} border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition`}
              >
                <h3 className="text-lg font-bold text-gray-800 uppercase">
                  {member.role}
                </h3>
                <p className="text-xl font-semibold text-gray-700 mt-2">
                  {member.name}
                </p>
                <p className="text-sm text-gray-600">{member.company}</p>
                <div className="mt-3 text-sm text-gray-700 space-y-1">
                  <p>
                    📧{" "}
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {member.email}
                    </a>
                  </p>
                  <p>📞 <a href={`tel:${member.phone}`} className="text-blue-600 hover:underline">{member.phone}</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
