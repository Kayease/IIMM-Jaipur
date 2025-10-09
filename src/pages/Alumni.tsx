import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Mail, Linkedin, Twitter, Facebook, Instagram, MapPin, Briefcase, GraduationCap, Calendar, Users, Award } from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const alumniData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    batch: "2015-2017",
    currentPosition: "Senior Manager - Supply Chain",
    company: "Tata Steel",
    location: "Mumbai, India",
    image: "/alumni-1.jpg",
    linkedin: "#",
    achievements: ["IIMM Gold Medalist", "Best Project Award 2017"]
  },
  {
    id: 2,
    name: "Priya Sharma",
    batch: "2016-2018",
    currentPosition: "Procurement Lead",
    company: "Adani Group",
    location: "Ahmedabad, India",
    image: "/alumni-2.jpg",
    linkedin: "#",
    achievements: ["Young Achiever Award 2019"]
  },
  {
    id: 3,
    name: "Amit Patel",
    batch: "2014-2016",
    currentPosition: "Director - Operations",
    company: "Reliance Industries",
    location: "Jaipur, India",
    image: "/alumni-3.jpg",
    linkedin: "#",
    achievements: ["IIMM Excellence Award 2020"]
  },
  {
    id: 4,
    name: "Neha Gupta",
    batch: "2017-2019",
    currentPosition: "Supply Chain Consultant",
    company: "Deloitte",
    location: "Bangalore, India",
    image: "/alumni-4.jpg",
    linkedin: "#",
    achievements: ["Best Thesis Award 2019"]
  },
  {
    id: 5,
    name: "Vikram Singh",
    batch: "2013-2015",
    currentPosition: "Vice President - Procurement",
    company: "JSW Steel",
    location: "Mumbai, India",
    image: "/alumni-5.jpg",
    linkedin: "#",
    achievements: ["IIMM Distinguished Alumnus 2021"]
  },
  {
    id: 6,
    name: "Ananya Reddy",
    batch: "2018-2020",
    currentPosition: "Category Manager",
    company: "Amazon",
    location: "Hyderabad, India",
    image: "/alumni-6.jpg",
    linkedin: "#",
    achievements: ["Young Leader Award 2020"]
  }
];

const events = [
  {
    id: 1,
    title: "Annual Alumni Meet 2023",
    date: "15 Dec 2023",
    location: "The Leela Palace, Jaipur",
    description: "Join us for an evening of networking and reminiscing with fellow alumni and faculty.",
    image: "/event-1.jpg"
  },
  {
    id: 2,
    title: "Industry Leaders Panel",
    date: "20 Jan 2024",
    location: "Virtual",
    description: "Hear from successful alumni about industry trends and career opportunities.",
    image: "/event-2.jpg"
  }
];

const successStories = [
  {
    id: 1,
    title: "From Campus to Corporate Leader",
    author: "Rajesh Kumar",
    batch: "2015-2017",
    excerpt: "How IIMM's practical approach to materials management helped me climb the corporate ladder...",
    image: "/story-1.jpg"
  },
  {
    id: 2,
    title: "Entrepreneurial Journey in Supply Chain",
    author: "Neha Gupta",
    batch: "2017-2019",
    excerpt: "Starting my own supply chain consultancy with the knowledge gained from IIMM...",
    image: "/story-2.jpg"
  }
];

export default function Alumni() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("directory");

  const filteredAlumni = alumniData.filter(alumni => 
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.batch.includes(searchQuery) ||
    alumni.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            IIMM Alumni Network
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600">
            Stay connected with your alma mater and fellow alumni across the globe
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search alumni by name, batch, or company..."
                className="pl-10 py-6 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs 
          defaultValue="directory" 
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <TabsList className="grid w-full sm:w-auto grid-cols-3 mb-4 sm:mb-0">
              <TabsTrigger value="directory">Directory</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="stories">Success Stories</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Button size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Join Network
              </Button>
            </div>
          </div>

          {/* Directory Tab */}
          <TabsContent value="directory" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAlumni.map((alumni, index) => (
                <motion.div
                  key={alumni.id}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  custom={index % 6}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
                      <img 
                        src={alumni.image} 
                        alt={alumni.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(alumni.name) + '&background=2563eb&color=fff&size=200';
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-xl font-bold text-white">{alumni.name}</h3>
                        <p className="text-blue-200 text-sm">Batch: {alumni.batch}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
                        <span>{alumni.currentPosition}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                        <span>{alumni.company} • {alumni.location}</span>
                      </div>
                      
                      {alumni.achievements.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Achievements</h4>
                          <div className="flex flex-wrap gap-2">
                            {alumni.achievements.map((achievement, i) => (
                              <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <Award className="h-3 w-3 mr-1" />
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6 flex justify-between items-center">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Linkedin className="h-4 w-4" />
                          Connect
                        </Button>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          View Profile →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:flex-shrink-0 md:w-1/3">
                        <img 
                          className="h-48 w-full object-cover md:h-full" 
                          src={event.image} 
                          alt={event.title}
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-1.5 text-blue-500" />
                          <span>{event.date}</span>
                          <MapPin className="h-4 w-4 ml-3 mr-1.5 text-blue-500" />
                          <span>{event.location}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        <Button>Register Now</Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Success Stories Tab */}
          <TabsContent value="stories" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{story.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="font-medium">{story.author}</span>
                        <span className="mx-2">•</span>
                        <span>{story.batch} Batch</span>
                      </div>
                      <p className="text-gray-600 mb-4">{story.excerpt}</p>
                      <Button variant="outline">Read Full Story</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Alumni Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Alumni Benefits</h2>
            <p className="text-blue-100 mb-8">
              As a valued member of the IIMM alumni community, you have access to exclusive benefits and resources
              to support your professional growth and development.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { icon: <GraduationCap className="h-8 w-8 mx-auto mb-2" />, text: "Lifelong Learning" },
                { icon: <Users className="h-8 w-8 mx-auto mb-2" />, text: "Networking" },
                { icon: <Briefcase className="h-8 w-8 mx-auto mb-2" />, text: "Career Services" },
                { icon: <Calendar className="h-8 w-8 mx-auto mb-2" />, text: "Alumni Events" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-blue-200">{benefit.icon}</div>
                  <p className="text-sm font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
            
            <Button variant="outline" className="mt-8 border-white/20 bg-white/10 hover:bg-white/20 text-white">
              Explore All Benefits
            </Button>
          </div>
        </motion.div>

        {/* Stay Connected Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our alumni community on social media to stay updated on news, events, and opportunities.
          </p>
          
          <div className="flex justify-center space-x-4">
            {[
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
              { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
              { icon: <Instagram className="h-5 w-5" />, label: "Instagram" }
            ].map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12"
                aria-label={social.label}
              >
                {social.icon}
              </Button>
            ))}
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">
              For any alumni-related queries, please contact: 
              <a href="mailto:alumni@iimm.org" className="text-blue-600 hover:underline ml-1">
                alumni@iimm.org
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
