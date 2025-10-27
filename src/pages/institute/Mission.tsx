import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InstituteHero from "@/components/InstituteHero";
import heroImage from "@/assets/Herosection/home3.png";

const Mission = () => {
  const values = [
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in all our programs and services.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest ethical standards and professional conduct.",
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Innovation",
      description:
        "We embrace new ideas and approaches to advance the field.",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Collaboration",
      description: "We believe in working together to achieve common goals.",
      color: "from-purple-500 to-fuchsia-500",
    },
    {
      title: "Inclusivity",
      description:
        "We value diversity and are committed to equal opportunities for all.",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Service",
      description:
        "We are dedicated to serving our members and the broader community.",
      color: "from-cyan-500 to-sky-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background via-muted/40 to-background">
      <InstituteHero
        title="Our Mission"
        subtitle="Guiding Principles and Vision of IIMM Jaipur"
        image={heroImage}
      />

      <section className="py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-10 border border-zinc-100 space-y-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl font-bold mb-6 text-primary">
                Our Mission Statement
              </h2>
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed">
                The Indian Institute of Materials Management (IIMM) Jaipur is
                committed to advancing the profession of materials management
                and related fields through:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-foreground/90">
                <li>Promoting excellence in education, training, and research</li>
                <li>Developing professional standards and ethical practices</li>
                <li>Fostering collaboration between industry and academia</li>
                <li>Providing a platform for knowledge sharing and growth</li>
                <li>
                  Advocating for recognition of materials management as a
                  critical business function
                </li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-muted"
            >
              <h2 className="font-heading text-4xl font-bold mb-4 text-primary">
                Our Vision
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                To be the premier professional body for materials management in
                India, recognized for excellence, innovation, and ethical
                leadership in the field.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-muted"
            >
              <h2 className="font-heading text-4xl font-bold mb-10 text-primary text-center">
                Core Values
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className={`relative p-6 rounded-2xl text-white bg-gradient-to-br ${value.color} shadow-md hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-md" />
                    <h3 className="relative font-heading text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="relative text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center pt-10"
            >
              <Link
                to="https://www.youtube.com/@iiimjaipur5534/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Watch Our Journey on YouTube 🎥
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Mission;
