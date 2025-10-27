import { motion } from "framer-motion";
import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home.png";

export default function IIMMHousePage() {
  const boardMembers = [
    {
      name: "Prof. Anil Sharma",
      designation: "Chairperson",
      qualification: "Ph.D., F.I.I.M.M.",
    },
    {
      name: "Dr. Sunita Mehta",
      designation: "Vice Chairperson",
      qualification: "Ph.D., M.I.I.M.M.",
    },
    {
      name: "Mr. Ramesh Verma",
      designation: "Treasurer",
      qualification: "MBA, F.I.I.M.M.",
    },
  ];

  const sponsorshipOptions = [
    ["Infotech Centre", "Rs. 10 lakhs*"],
    ["Four Classrooms", "Rs. 5 lakhs* each"],
    ["Conference Room", "Rs. 7.5 lakhs*"],
    ["Education Centre", "Rs. 6 lakhs*"],
    ["Auditorium", "Rs. 20 lakhs*"],
    ["Centre for Advanced Studies", "Rs. 5 lakhs*"],
    ["Research Centre", "Rs. 10 lakhs*"],
    ["Library", "Rs. 7.5 lakhs*"],
    ["Board Room", "-"],
    ["Publication", "-"],
    ["Guest House", "-"],
    ["Administration Office", "-"],
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <InstituteHero
          title="IIMM House – National Headquarters"
          image={heroImage}
          subtitle="The Heart of Materials Management Excellence"
        />
      </motion.div>

      <div className="container mx-auto px-6 py-16">
        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The IIMM House stands as a testament to our dedication to promoting
            excellence in the field of Materials Management. It serves as a hub
            for learning, collaboration, and advancement in the profession.
          </p>
        </motion.section>

        {/* Board Members Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Board Members
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-800">{member.designation}</p>
                <p className="text-gray-600 text-sm mt-1">
                  {member.qualification}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Sponsorship Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            IIMM House – NHQ Building Sponsorship
          </h2>

          <p className="text-gray-700 mb-6">
            You have the following options to support the project. The payment
            can be made by cheque/DD favoring{" "}
            <span className="font-semibold">
              “Indian Institute of Materials Management A/c, NHQ Building,
              Sponsorship”.
            </span>
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm shadow-md">
              <thead className="bg-gradient-to-r from-primary to-pink-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Donation Areas</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sponsorshipOptions.map(([area, amount], idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="hover:bg-gray-50 transition-all duration-300"
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {area}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{amount}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              Donation received is exempted under 80L of the Income Tax Act,
              1961 vide Order No.DIT(E)/MC/80G/1964/99/2000 dated 02-06-1999
              valid from 08-02-1999 to 31-03-2001.
            </li>
          </ul>

          <p className="text-gray-700 mb-6">
            Each sponsor’s name will be prominently displayed on a specially
            erected marble plaque at an appropriate place.
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Contributions may be sent to:
            </h3>
            <p className="text-gray-800 font-medium mb-2">
              Indian Institute of Materials Management (National Headquarters)
            </p>
            <p className="text-gray-700 mb-1">
              102 & 104, Institutional Area, Sector 15, CBD-Belapur, Navi
              Mumbai – 400 614.
            </p>
            <p className="text-gray-700 mb-1">
              Phones: 91-022-27561754 / 27565592 | Fax: 91-022-27565741
            </p>
            <p className="text-gray-700">
              E-mail:
              <a
                href="mailto:iimmedu@mtnl.net.in"
                className="text-primary hover:underline ml-1"
              >
                iimmedu@mtnl.net.in
              </a>
              ,
              <a
                href="mailto:iimmnhq@vsnl.com"
                className="text-primary hover:underline ml-1"
              >
                iimmnhq@vsnl.com
              </a>
            </p>
          </div>
        </motion.section>

        {/* Visit Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary to-pink-500 p-8 rounded-2xl text-white text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Plan Your Visit</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Explore the state-of-the-art facilities of IIMM House and connect
            with professionals shaping the future of Materials Management.
          </p>
          <a href="/contact">
            <motion.span
              className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.span>
          </a>
        </motion.section>
      </div>
    </div>
  );
}
