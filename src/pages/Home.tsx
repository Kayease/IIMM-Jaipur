import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Building2, Calendar, FileText, GraduationCap, Network, User, Star, PlayCircle, MapPin } from "lucide-react";
import YoutubeSection from "@/components/YoutubeSection";
import HeroCarousel from "@/components/HeroCarousel";
import HomeCarousel from "@/components/HomeCarousel";
import Map from "@/components/Map";
import heroMain from "@/assets/hero-main.jpg";
import Image from "@/assets/Herosection/image.png"

const Home = () => {
  const quickLinks = [
    { name: "Education", icon: BookOpen, link: "/education/courses", color: "bg-red-500" },
    { name: "Prospectus", icon: FileText, link: "/education/prospectus", color: "bg-blue-600" },
    { name: "Application Form", icon: GraduationCap, link: "/education/forms", color: "bg-primary" },
    { name: "Membership", icon: Users, link: "/membership/why-join", color: "bg-purple-600" },
    { name: "Office Bearers", icon: Award, link: "/institute/administration#office-bearers", color: "bg-yellow-600" },
    { name: "IIMM Network", icon: Network, link: "/membership/branches", color: "bg-orange-600" },
  ];

  return (
    <div className="w-full">
      <div className="bg-primary-dark text-primary-foreground text-center py-3 px-4">
        <p className="text-sm md:text-base font-medium">SECOND CHANCE - JULY-2025 SESSION - Apply Now!</p>
      </div>
      
      

      <section className="bg-muted/30">
        <div className="w-full">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden animate-fade-in">
              <img src={heroMain} alt="Competition in Materials Management/SCM" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <h2 className="text-white text-2xl md:text-4xl font-heading font-bold leading-tight">
                    Competition in Materials Management/SCM
                  </h2>
                </div>
              </div>
            </div>
            <div className="h-[300px] md:h-[500px] lg:h-[600px] animate-fade-in">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.link}>
                <Card className={`hover:shadow-lg transition-all duration-300 group h-full border-t-4 ${link.color}`}>
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                    <div className={`w-16 h-16 rounded-full ${link.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <link.icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm md:text-base">{link.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <HomeCarousel />

      <section className="py-16 bg-white w-full">
        <div className="w-full max-w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gray-900"> About IIMM Jaipur</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Indian Institute of Materials Management (IIMM) Jaipur Branch is a premier professional body dedicated to the advancement of materials management and supply chain practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left Side - Images */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4 h-full p-2">
                <div className="col-span-2 h-auto rounded-xl overflow-hidden shadow-lg">
                  <div className="relative pt-[40%] max-h-60">
                    <img 
                      src={Image}
                      alt="IIMM Jaipur Conference"
                      className="absolute top-0 left-0 right-0 bottom-0 m-auto max-h-[90%] max-w-[90%] object-contain bg-white p-1 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="h-40 md:h-48 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                    alt="IIMM Workshop"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-40 md:h-48 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="IIMM Training"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="bg-white p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why IIMM Jaipur?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Expert Faculty</h4>
                    <p className="text-sm text-gray-600">Learn from industry veterans with decades of experience.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Certification</h4>
                    <p className="text-sm text-gray-600">Globally recognized certification programs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Networking</h4>
                    <p className="text-sm text-gray-600">Connect with industry professionals and alumni.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link to="/education/courses">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Explore Our Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 px-4">
            <div className="bg-primary/5 p-8 hover:bg-primary/10 transition-colors duration-200 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Community</h3>
              <p className="text-gray-700 mb-4">Join over 10,000 professionals in our growing network of materials management experts.</p>
              <Link to="/membership" className="text-primary font-medium hover:underline inline-flex items-center group">
                Join Now <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="bg-primary/5 p-8 hover:bg-primary/10 transition-colors duration-200 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Programs</h3>
              <p className="text-gray-700 mb-4">Comprehensive courses designed to enhance your professional skills and knowledge.</p>
              <Link to="/education" className="text-primary font-medium hover:underline inline-flex items-center">
                Explore Courses <span className="ml-1">→</span>
              </Link>
            </div>

            <div className="bg-primary/5 p-8 hover:bg-primary/10 transition-colors duration-200 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Achievements</h3>
              <p className="text-gray-700 mb-4">Recognized as a leading professional body in materials management education.</p>
              <Link to="/about" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Discover More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

 

      <section className="py-16 bg-white">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">What Our Students Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">Hear from our successful alumni who have transformed their careers through our programs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-300"></div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                    <User className="h-10 w-10 text-blue-500" />
                  </div>
                </div>
                <div className="text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"The SCM course transformed my career. The practical knowledge and industry insights I gained were invaluable."</p>
                <h4 className="font-heading font-semibold text-lg">Rajesh Kumar</h4>
                <p className="text-sm text-muted-foreground">Supply Chain Manager, TechCorp</p>
              </CardContent>
            </Card>

           

            {/* Testimonial 2 */}
            <Card className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-300"></div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <div className="w-full h-full bg-green-100 flex items-center justify-center">
                    <User className="h-10 w-10 text-green-500" />
                  </div>
                </div>
                <div className="text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"The faculty's expertise and the comprehensive curriculum helped me secure a leadership role in a top MNC."</p>
                <h4 className="font-heading font-semibold text-lg">Priya Sharma</h4>
                <p className="text-sm text-muted-foreground">Head of Procurement, Global Retail</p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-purple-300"></div>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                  <div className="w-full h-full bg-purple-100 flex items-center justify-center">
                    <User className="h-10 w-10 text-purple-500" />
                  </div>
                </div>
                <div className="text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4">"The networking opportunities and practical training were exceptional. Highly recommended for aspiring professionals."</p>
                <h4 className="font-heading font-semibold text-lg">Amit Patel</h4>
                <p className="text-sm text-muted-foreground">Logistics Director, E-comm Giant</p>
              </CardContent>
            </Card>
              
      
          </div>
              {/* YouTube Videos Section */}
      <YoutubeSection />

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* IIMM Branches Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/institute-building.jpg" 
            alt="IIMM Institute Building"
            className="w-full h-full object-cover brightness-110 contrast-125"
            style={{
              filter: 'saturate(1.2)'
            }}
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100 to-transparent opacity-50 rounded-full filter blur-3xl -mr-40 -mt-40 z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 rounded-full filter blur-3xl -ml-40 -mb-40 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Branches</h2>
      <div className="w-24 h-1 rounded-full bg-primary mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
        Explore our network of branches across India, each dedicated to promoting excellence in materials management.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {/* Card Template */}
      {[
        {
          label: "North Zone",
          code: "N",
          desc: "Serving the northern region with excellence in materials management.",
          href: "/membership/branches/north",
          color: "from-blue-500 to-blue-800",
          border: "border-blue-100",
          iconBg: "bg-blue-50",
          iconText: "text-blue-700"
        },
        {
          label: "East Zone",
          code: "E",
          desc: "Promoting materials management excellence across eastern states.",
          href: "/membership/branches/east",
          color: "from-green-500 to-green-800",
          border: "border-green-100",
          iconBg: "bg-green-50",
          iconText: "text-green-700"
        },
        {
          label: "West Zone",
          code: "W",
          desc: "Leading materials management initiatives in the western region.",
          href: "/membership/branches/west",
          color: "from-amber-500 to-amber-800",
          border: "border-amber-100",
          iconBg: "bg-amber-50",
          iconText: "text-amber-700"
        },
        {
          label: "South Zone",
          code: "S",
          desc: "Advancing materials management practices in southern India.",
          href: "/membership/branches/south",
          color: "from-red-500 to-red-800",
          border: "border-red-100",
          iconBg: "bg-red-50",
          iconText: "text-red-700"
        },
        {
          label: "Central Zone",
          code: "C",
          desc: "Serving the heart of India with professional materials management.",
          href: "/membership/branches/central",
          color: "from-purple-500 to-purple-800",
          border: "border-purple-100",
          iconBg: "bg-purple-50",
          iconText: "text-purple-700"
        }
      ].map(zone => (
        <div
          key={zone.label}
          className={`group bg-white/80 backdrop-blur-sm rounded-2xl border ${zone.border} shadow-lg p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105 focus-within:shadow-primary/40 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary hover:bg-white/95`}
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${zone.iconBg} shadow-sm transition-opacity duration-300 group-hover:opacity-90`}>
            <span className={`text-3xl font-extrabold tracking-tight ${zone.iconText}`}>{zone.code}</span>
            {/* Optionally swap span above for icon SVG related to the zone */}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{zone.label}</h3>
          <p className="text-gray-600 text-center text-sm mb-4">{zone.desc}</p>
          <a
            href={zone.href}
            className={`inline-block px-5 py-2 rounded-lg bg-gradient-to-r ${zone.color} text-white text-sm font-semibold shadow transition-all duration-200 hover:brightness-110 focus:outline-none`}
            tabIndex="0"
          >Learn More &rarr;</a>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Enhanced Location Map Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  {/* Decorative Backgrounds */}
  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

  <div className="relative container mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-16 max-w-4xl mx-auto">
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6 shadow-lg">
        <MapPin className="w-8 h-8 text-blue-600" />
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Find Our Location
      </h2>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        Visit our Jaipur branch and experience professional excellence in
        materials management education.
      </p>
    </div>

    {/* Grid Layout */}
    <div className="grid lg:grid-cols-12 gap-10 items-center">
      {/* Map Section */}
      <div className="lg:col-span-8 h-[450px] md:h-[550px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl"></div>

        <div className="absolute inset-0 bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Embedded Google Map */}
          <iframe
            title="IIMM Jaipur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0127648249917!2d75.78265247513954!3d26.78984436538644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5fcf7289f8f%3A0xd5e61a6e0fdbde8!2sIndian%20Institute%20of%20Materials%20Management%20(IIMM)%20Jaipur%20Branch!5e0!3m2!1sen!2sin!4v1730026012359!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>

        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-4xl shadow-lg">
          <MapPin className="w-10 h-10 text-gray-900" />
        </div>
      </div>

      {/* Contact Info Card */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100 hover:-translate-y-2 transition-all duration-500">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Building2 className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              IIMM Jaipur Branch
            </h3>
            <p className="text-blue-600 font-medium">
              Jaipur, Rajasthan, India
            </p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Address
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  48, Mohan Nagar,<br />
                  Gopalpura Bypass,<br />
                  Jaipur – 302001,<br />
                  Rajasthan, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Phone
                </h4>
                <a
                  href="tel:+919799299157"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  09799299157
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Email
                </h4>
                <a
                  href="mailto:iimmjaipur@gmail.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  iimmjaipur1@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Directions Button */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a
              href="https://www.google.com/maps/place/Indian+Institute+of+Materials+Management+(IIMM)+Jaipur+Branch/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Advance Your Career?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join IIMM Delhi and become part of India's premier materials management professional community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/education/forms">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Apply for Courses</Button>
            </Link>
            <Link to="/membership/why-join">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
                Become a Member
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
    
      
    </div>
  );
};

export default Home;
