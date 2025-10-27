import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const HistorySection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 text-gray-900 py-12 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* ---------- HISTORY ---------- */}
        <motion.h2
          className="text-3xl font-bold mb-6 text-blue-800 border-b-4 border-blue-500 inline-block pb-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          History
        </motion.h2>

        {[
          `Indian Institute of Materials Management (IIMM), with its headquarters at Navi Mumbai, is a Professional Body of Materials Management classified under Engineering & Technology Group under Apprenticeship Act, 1961 and is recognised by ISTE, MHRD.`,
          `Through its wide network of 56 branches and 19 chapters having around 9500 members drawn from public and private sectors, IIMM is dedicated to the promotion of the profession of Materials Management through its multifarious activities including Educational Programs approved by AICTE (Post Graduate Diploma in Materials Management and Post Graduate Diploma in Logistics & Supply Chain Management), Seminars, National Conferences, Regional Conferences, Workshops, In-house training programs, Consultancy & Research Programs.`,
          `To have an effective global interaction, the Institute is a charter member of International Federation of Purchasing and Supply Management (IFPSM), Helsinki, Finland which has its roots in over 44 member countries.`,
          `In furtherance of its objectives, IIMM brings out a monthly journal, "Materials Management Review" comprising latest Articles and Research Papers in the field of Materials, Logistics, Purchase, Inventory, Supply Chain Management and latest Technological Innovations like Artificial Intelligence, Block Chain, Cloud Computing and Internet of Things.`,
          `The Institute has its Centre for Research in Materials Management (CRIMM) at Kolkata, which is engaged in promotion of research activities in collaboration with industries for furthering the advancement of the profession of Materials and Supply Chain Management.`,
          `The Institute is dedicated for the Societal & Environmental considerations through Sustainable Procurement, Green Purchasing and Life Cycle Consideration, which are part of our course curriculum.`,
          `The aim & objective of the Institution is to update & upgrade the skills & knowledge of professionals so as to ensure inclusive and sustainable development.`,
        ].map((text, index) => (
          <motion.p
            key={index}
            className="mb-4 leading-relaxed text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeInUp}
          >
            {index === 0 ? (
              <>
                <strong className="text-blue-700">
                  Indian Institute of Materials Management (IIMM)
                </strong>
                , with its headquarters at Navi Mumbai, is a Professional Body
                of Materials Management classified under Engineering &
                Technology Group under Apprenticeship Act, 1961 and is
                recognised by ISTE, MHRD.
              </>
            ) : (
              text
            )}
          </motion.p>
        ))}

        {/* ---------- EVOLUTION ---------- */}
        <motion.h2
          className="text-3xl font-bold mt-14 mb-6 text-blue-800 border-b-4 border-blue-500 inline-block pb-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Evolution Of IIMM
        </motion.h2>

        <motion.div
          className="rounded-xl overflow-hidden bg-white shadow-md border border-blue-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-3 border-b border-gray-300 text-center">
            {[
              "National Association of Purchasing Executives Mumbai (1960–1970)",
              "Materials Management Association of Hyderabad (1968–1975)",
              "Purchasing Officers Association Calcutta (1960–1972)",
            ].map((title, i) => (
              <div
                key={i}
                className={`p-6 hover:bg-blue-50 transition ${
                  i < 2 ? "border-r border-gray-300" : ""
                }`}
              >
                <p className="font-medium">{title}</p>
                <div className="text-2xl mt-2 text-blue-600 animate-bounce">
                  ⬇️
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 border-b border-gray-300 text-center">
            {[
              "National Associations for Materials Management (1970–1975)",
              "Materials Management Association of India (1972–1975)",
            ].map((title, i) => (
              <div
                key={i}
                className={`p-6 hover:bg-blue-50 transition ${
                  i === 0 ? "border-r border-gray-300" : ""
                }`}
              >
                <p className="font-medium">{title}</p>
                <div className="text-2xl mt-2 text-blue-600 animate-bounce">
                  ⬇️
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="p-8 border-b border-gray-300 text-center">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/old-logo.png"
                alt="IIMM Old Logo"
                className="h-20 mb-3 object-contain"
              />
              <p className="font-semibold text-blue-700">
                Indian Association of Materials Management (1975–1983)
              </p>
              <p className="text-gray-600">Rechristened to</p>
              <div className="text-2xl mt-2 text-blue-600 animate-bounce">
                ⬇️
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 text-center">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/logo.png"
                alt="IIMM Logo"
                className="h-20 mb-3 object-contain"
              />
              <p className="font-semibold text-blue-800">
                Indian Institute of Materials Management (23-4-1983)
              </p>
              <p className="text-gray-700">
                Current Membership &gt; 9500 Individual Members &gt; 200
                Institutional Members
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;
