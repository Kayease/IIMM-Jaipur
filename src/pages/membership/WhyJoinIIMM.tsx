import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function WhyJoinIIMM() {
  const navigate = useNavigate();
  const benefits = [
    {
      title: "Professional Recognition",
      description: "Gain recognition as a qualified materials management professional and enhance your career prospects.",
      icon: "🏆",
      gradient: "from-amber-400 to-yellow-500"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with industry leaders, experts, and peers through IIMM's extensive network.",
      icon: "🤝",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Professional Development",
      description: "Access to continuous learning programs, workshops, and certification courses.",
      icon: "📚",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      title: "Industry Updates",
      description: "Stay informed about the latest trends, technologies, and best practices in materials management.",
      icon: "📈",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Career Advancement",
      description: "Access to exclusive job opportunities and career development resources.",
      icon: "💼",
      gradient: "from-rose-400 to-red-500"
    },
    {
      title: "Research & Publications",
      description: "Get access to IIMM's research papers, journals, and industry reports.",
      icon: "🔍",
      gradient: "from-cyan-400 to-blue-500"
    }
  ];

  const membershipBenefits = [
    "Professional certification and accreditation",
    "Access to IIMM's knowledge resources",
    "Discounts on training programs and events",
    "Networking with industry professionals",
    "Career development opportunities",
    "Subscription to IIMM publications"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Why Join IIMM?
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-yellow-400 mx-auto mb-6 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto"
          >
            Become part of India's premier professional body for materials management
          </motion.p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4 py-16 -mt-12">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 overflow-hidden relative group hover:shadow-xl transition-all duration-300`}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              <div className={`text-5xl mb-6 w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br ${benefit.gradient} text-white shadow-md`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.gradient} transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Membership Benefits */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Exclusive Membership Benefits</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 backdrop-blur-sm bg-white/80">
              <div className="grid md:grid-cols-2 gap-6">
                {membershipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                        <span className="text-blue-500 group-hover:text-white text-sm font-bold">✓</span>
                      </div>
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <button 
                  onClick={() => navigate('/membership/forms/ordinary')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Join IIMM Today
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
