import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  User,
  BookOpen,
  AlertCircle,
  Home,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="w-full">
      {/* 🌈 Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/90 to-accent text-white text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Whether you have a question, feedback, or partnership idea — we’d
            love to hear from you!
          </p>
        </motion.div>
      </section>

      {/* 📞 Contact Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="nhq" className="w-full">
            {/* Tabs Navigation */}
            <div className="flex justify-center mb-10 overflow-x-auto">
              <TabsList className="grid w-full max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { value: "nhq", label: "IIMM NHQ", icon: Home },
                  { value: "executive", label: "Executive Committee", icon: Users },
                  { value: "chairmen", label: "Chairmen", icon: User },
                  { value: "coordinators", label: "Coordinators", icon: BookOpen },
                  { value: "complaint", label: "Complaint Committee", icon: AlertCircle },
                ].map(({ value, label, icon: Icon }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="flex flex-col items-center py-3 rounded-xl border border-border hover:bg-muted/50 transition"
                  >
                    <Icon className="h-5 w-5 mb-1 text-primary" />
                    <span className="text-xs sm:text-sm font-medium">{label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* IIMM NHQ Content */}
            <TabsContent value="nhq">
              <Card className="shadow-xl border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Home className="h-6 w-6 text-primary" />
                    Indian Institute of Materials Management (NHQ)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* ✉️ Contact Form */}
                    <div>
                      <h2 className="font-heading text-3xl font-semibold mb-6">
                        Send us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <Input
                          placeholder="Full Name *"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                        <Textarea
                          rows={5}
                          placeholder="Write your message *"
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                        />
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90 text-white font-medium"
                        >
                          Send Message
                        </Button>
                      </form>
                    </div>

                    {/* 📍 Contact Info */}
                    <div className="space-y-5">
                      {[
                        {
                          icon: MapPin,
                          title: "Address",
                          content: (
                            <>
                              123 Education Street, Jaipur, Rajasthan 302001 <br />
                              India
                            </>
                          ),
                        },
                        {
                          icon: Phone,
                          title: "Phone",
                          content: (
                            <>
                              +91 11 1234 5678 <br /> +91 11 8765 4321
                            </>
                          ),
                        },
                        {
                          icon: Mail,
                          title: "Email",
                          content: (
                            <>
                              info@iimmdelhi.org <br /> nhq@iimmdelhi.org
                            </>
                          ),
                        },
                        {
                          icon: Clock,
                          title: "Office Hours",
                          content: (
                            <>
                              Mon–Fri: 9 AM – 6 PM <br />
                              Sat: 9 AM – 2 PM <br /> Sun: Closed
                            </>
                          ),
                        },
                      ].map(({ icon: Icon, title, content }, i) => (
                        <Card key={i} className="hover:shadow-md transition">
                          <CardContent className="p-6 flex gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                              <Icon size={24} className="text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">{title}</h3>
                              <p className="text-muted-foreground text-sm">{content}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* 🌍 Map Section */}
                  <div className="mt-10">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.801823028079!2d75.78727087551583!3d26.788249576701727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40e9b8dca6f%3A0x6b8ffb4e0f7a44da!2sJaipur!5e0!3m2!1sen!2sin!4v1698859990299!5m2!1sen!2sin"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Placeholder tabs (same as before, just better style) */}
            {["executive", "chairmen", "coordinators", "complaint"].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <Card className="text-center py-12 border-dashed border-2 border-muted-foreground/20">
                  <CardHeader>
                    <CardTitle className="text-2xl capitalize">
                      {tab.replace(/^\w/, (c) => c.toUpperCase())} Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Contact information for the {tab} will be updated soon.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 🌐 Social & FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect with Us</h2>
          <div className="flex justify-center gap-6 mb-12">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition"
              >
                <Icon className="text-primary" />
              </a>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-left space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-4">FAQs</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold">1. How can I enroll in a course?</h4>
                  <p className="text-muted-foreground">
                    You can visit our Courses section and apply directly through the
                    registration form.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold">
                    2. How long does it take to get a response to my query?
                  </h4>
                  <p className="text-muted-foreground">
                    Usually, our team responds within 24–48 hours during working days.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold">
                    3. Can I visit the NHQ in person?
                  </h4>
                  <p className="text-muted-foreground">
                    Yes, we welcome visitors during office hours. Please call ahead to
                    schedule a meeting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
