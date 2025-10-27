import { Target, Eye, Award, Users, BookOpen, Briefcase, Globe, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import IimmImage from "@/assets/Herosection/iimm.png";
import AboutImage1 from "@/assets/About/about1.png";
import AboutImage2 from "@/assets/About/about2.png";
import AboutImage3 from "@/assets/About/about3.png";
import InstituteHero from "@/components/InstituteHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (

    <div className="w-full min-h-screen bg-gradient-to-b from-background to-muted/30">
      <InstituteHero
        title="About IIMM Jaipur"
        subtitle="Pioneering Excellence in Management Education Since 1998"
        image={IimmImage}
      />

      {/* About Section with Image */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src={AboutImage1} 
                alt="IIMM Jaipur Campus" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Our Legacy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Established in 1998, the Indian Institute of Materials Management (IIMM) Jaipur Chapter has been a cornerstone of excellence in materials management education in Rajasthan. Our journey of over two decades has been marked by a steadfast commitment to nurturing future leaders in supply chain, logistics, and materials management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                As a premier professional body, we bridge the gap between industry and academia, offering cutting-edge programs that combine theoretical knowledge with practical applications. Our alumni network spans across industries, making significant contributions to organizational success nationwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link to="/programmes">
                    <BookOpen className="mr-2 h-4 w-4" /> Our Programs
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">
                    <Users className="mr-2 h-4 w-4" /> Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Core Principles</h2>
            <p className="text-lg text-muted-foreground">Guiding the future of materials management through excellence, innovation, and ethical leadership</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <Card className="h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden group border border-blue-100">
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-6 right-6 opacity-10">
                  <Eye size={80} className="text-blue-500" />
                </div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Eye size={28} className="text-blue-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-blue-700">Our Vision</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  To be the premier institute for materials management education, recognized globally for developing ethical leaders who drive sustainable business practices and operational excellence.
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden group border border-emerald-100">
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 to-teal-400"></div>
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-6 right-6 opacity-10">
                  <Target size={80} className="text-emerald-500" />
                </div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                  <Target size={28} className="text-emerald-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-emerald-700">Our Mission</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  To provide world-class education in materials management through innovative teaching, industry partnerships, and research that addresses real-world supply chain challenges while fostering ethical leadership and continuous learning.
                </p>
              </CardContent>
            </Card>

            {/* Values Card */}
            <Card className="h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden group border border-violet-100">
              <div className="h-1.5 w-full bg-gradient-to-r from-violet-500 to-fuchsia-400"></div>
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-6 right-6 opacity-10">
                  <Award size={80} className="text-violet-500" />
                </div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-violet-50 flex items-center justify-center group-hover:bg-violet-100 transition-colors duration-300">
                  <Award size={28} className="text-violet-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-violet-700">Our Values</h3>
                <ul className="space-y-3 text-muted-foreground text-left">
                  <li className="flex items-start group">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-violet-100 text-violet-600 rounded-full text-sm font-medium">1</span>
                    <span>Excellence in education and professional development</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-violet-100 text-violet-600 rounded-full text-sm font-medium">2</span>
                    <span>Ethical business practices and social responsibility</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-violet-100 text-violet-600 rounded-full text-sm font-medium">3</span>
                    <span>Innovation in supply chain management</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-violet-100 text-violet-600 rounded-full text-sm font-medium">4</span>
                    <span>Industry-academia collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Glimpses of IIMM Jaipur</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={AboutImage2} 
                alt="Campus Life at IIMM Jaipur" 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg mb-2">Modern Infrastructure</h3>
                <p className="text-muted-foreground">State-of-the-art facilities for an enhanced learning experience</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={AboutImage3} 
                alt="Industry Interaction" 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg mb-2">Industry Connect</h3>
                <p className="text-muted-foreground">Regular industry interactions and expert sessions</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src={AboutImage1} 
                alt="Campus Events" 
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-lg mb-2">Vibrant Campus Life</h3>
                <p className="text-muted-foreground">Engaging events and extracurricular activities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground">Transforming careers and organizations through excellence in materials management education</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">5,000+</h3>
              <p className="text-muted-foreground font-medium">Trained Professionals</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
              <p className="text-muted-foreground font-medium">Corporate Partners</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-50 flex items-center justify-center">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">25+</h3>
              <p className="text-muted-foreground font-medium">Years of Excellence</p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground font-medium">Expert Faculty Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-12 text-white">
            <h2 className="font-heading text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Join IIMM Jaipur and become part of a legacy of excellence in materials management education. Our programs are designed to equip you with the skills needed to excel in today's dynamic business environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-primary ">
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
