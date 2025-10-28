import React from "react";
import { MapPin, Phone, Mail, FileText, Users, User, Building2, Send, MessageCircle, User as UserIcon, Mail as MailIcon, Phone as PhoneIcon, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import InstituteHero from "@/components/InstituteHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import PresidentImage from "@/assets/images/pastChairmen.png";
import VicePresidentsImage from "@/assets/images/vicecharmen.png";
import SecretaryImage from "@/assets/images/Secretary.png";
import TreasurerImage from "@/assets/images/treasurer.png";
// Using existing images as placeholders for new members
import JointSecretaryImage from "@/assets/images/Secretary.png";
import ExecutiveMemberImage from "@/assets/images/vicecharmen.png";
import PastPresidentImage from "@/assets/images/pastChairmen.png";

// ✅ Fallback Hero Image (Unsplash)
const heroImage =
  "https://images.unsplash.com/photo-1521790361118-9bfa0a9a8e65?auto=format&fit=crop&w=1200&q=80";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle form submission
    console.log(values);
    toast.success("Your message has been sent successfully!");
    form.reset();
  }
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <InstituteHero
        title="Contact Us"
        description="Get in touch with the Indian Institute of Materials Management (IIMM). Connect with our team, explore branches across India, or reach our course coordinators."
        image={heroImage}
      />

      {/* Contact Info Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          IIMM Head Office
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="shadow-md border-t-4 border-blue-600">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" />
                <p>
                  Plot No. 102 & 104, Sector 15, Institutional Area,
                  <br />
                  CBD Belapur, Navi Mumbai - 400614
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" />
                <p>+91-22-2756 5592</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" />
                <p>admin@iimm.org</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-t-4 border-indigo-600">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">
                Office Timings
              </h3>
              <p>Monday – Friday: 10:00 AM – 6:00 PM</p>
              <p>Saturday & Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* National Executive Committee */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
            National Executive Committee
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Meet our esteemed committee members who guide and lead the Indian Institute of Materials Management
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* President */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
                <img 
                  src={PresidentImage}
alt="Shri D.P. Agarwal - President"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Shri D.P. Agarwal</h3>
                  <p className="text-blue-200 text-sm">President</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Leading IIMM with vision and dedication to excellence in materials management education.</p>
              </CardContent>
            </Card>

            {/* Vice President - Sanjay Tiwari */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
                <img 
                  src={VicePresidentsImage}
                  alt="Shri Sanjay Tiwari - Vice President"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Shri Sanjay Tiwari</h3>
                  <p className="text-blue-200 text-sm">Vice President</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Bringing extensive experience and leadership to IIMM's executive team.</p>
              </CardContent>
            </Card>

            {/* Vice President - H.V. Subramanya */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
                <img 
                  src={VicePresidentsImage}
                  alt="Shri H.V. Subramanya - Vice President"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Shri H.V. Subramanya</h3>
                  <p className="text-blue-200 text-sm">Vice President</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Dedicated to advancing materials management education and practices.</p>
              </CardContent>
            </Card>

            {/* Hon. Secretary */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
                <img 
                  src={SecretaryImage}
                  alt="Shri Rajeev Verma - Hon. Secretary"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Shri Rajeev Verma</h3>
                  <p className="text-blue-200 text-sm">Hon. Secretary</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Overseeing the administrative functions and strategic initiatives of IIMM.</p>
              </CardContent>
            </Card>

            {/* Hon. Treasurer */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
                <img 
                  src={TreasurerImage}
                  alt="Shri Shashikant Vaze - Hon. Treasurer"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Shri Shashikant Vaze</h3>
                  <p className="text-blue-200 text-sm">Hon. Treasurer</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Managing the financial affairs and ensuring fiscal responsibility of the institute.</p>
              </CardContent>
            </Card>
            {/* Joint Secretary */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
                <img 
                  src={JointSecretaryImage}
                  alt="Shri Ramesh Kumar - Joint Secretary"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Shri Ramesh Kumar</h3>
                  <p className="text-blue-200 text-sm">Joint Secretary</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Supporting the secretariat and ensuring smooth operations of IIMM's executive functions.</p>
              </CardContent>
            </Card>

            {/* Executive Member */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
                <img 
                  src={ExecutiveMemberImage}
                  alt="Smt. Meera Desai - Executive Member"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Smt. Meera Desai</h3>
                  <p className="text-blue-200 text-sm">Executive Member</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Contributing strategic insights and governance expertise to IIMM's leadership team.</p>
              </CardContent>
            </Card>

            {/* Immediate Past President */}
            <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
                <img 
                  src={PastPresidentImage}
                  alt="Shri Amitabh Khanna - Immediate Past President"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">Shri Amitabh Khanna</h3>
                  <p className="text-blue-200 text-sm">Immediate Past President</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">Providing valuable guidance and continuity to IIMM's leadership with years of experience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          IIMM Branches Across India
        </h2>
        <div className="text-center">
          <p className="max-w-3xl mx-auto text-gray-600 mb-6">
            IIMM has branches all over India to promote materials management
            education and networking. Click below to download the complete list.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 flex items-center gap-2 mx-auto">
            <FileText className="h-5 w-5" />
            <a
              href="https://iimm.org/pdf/iimm-branches.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Branches PDF
            </a>
          </Button>
        </div>
      </section>

      {/* Chairmen Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Chairmen
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-t-4 border-blue-600 shadow-sm">
            <CardContent className="p-6 text-center">
              <User className="mx-auto text-blue-600 mb-3" size={36} />
              <h4 className="font-semibold text-lg mb-1">Shri Sanjay Tiwari</h4>
              <p className="text-gray-600">Chairman - Board of Studies</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-indigo-600 shadow-sm">
            <CardContent className="p-6 text-center">
              <User className="mx-auto text-indigo-600 mb-3" size={36} />
              <h4 className="font-semibold text-lg mb-1">Shri V.S. Chauhan</h4>
              <p className="text-gray-600">Chairman - Exam Board</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Coordinators */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-indigo-50 via-white to-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Course Coordinators
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="shadow-sm border-l-4 border-blue-600">
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-2">PGDMM & GDMM</h4>
              <p className="text-gray-700">
                Prof. (Dr.) N. Ramachandran – National Course Coordinator
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-l-4 border-blue-600">
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-2">
                PGP in Materials & Logistics
              </h4>
              <p className="text-gray-700">
                Prof. (Dr.) V.S. Chauhan – National Course Coordinator
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internal Complaints Committee */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Internal Complaints Committee
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-t-4 border-red-500 shadow-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-2">Chairperson</h4>
              <p className="text-gray-700">Dr. Aarti Kulkarni</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-red-500 shadow-sm">
            <CardContent className="p-6">
              <h4 className="font-semibold text-lg mb-2">Members</h4>
              <p className="text-gray-700">
                Ms. Neha Sharma <br /> Mr. Amit Patel <br /> Ms. Sneha Joshi
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-blue-700 mb-3">
              Send Us a Message
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you soon.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                        <div className="relative mt-1">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <UserIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="pl-10 py-6 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        </div>
                        <FormMessage className="text-sm text-red-600 mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                        <div className="relative mt-1">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MailIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            {...field} 
                            className="pl-10 py-6 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        </div>
                        <FormMessage className="text-sm text-red-600 mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                        <div className="relative mt-1">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MessageSquare className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input 
                            placeholder="How can we help?" 
                            {...field} 
                            className="pl-10 py-6 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        </div>
                        <FormMessage className="text-sm text-red-600 mt-1" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                        <div className="relative mt-1">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <PhoneIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input 
                            type="tel" 
                            placeholder="+91 98765 43210" 
                            {...field} 
                            className="pl-10 py-6 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        </div>
                        <FormMessage className="text-sm text-red-600 mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="message" className="text-gray-700 font-medium">Your Message *</Label>
                      <div className="mt-1">
                        <Textarea
                          placeholder="Type your message here..."
                          className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                          {...field}
                        />
                      </div>
                      <FormMessage className="text-sm text-red-600 mt-1" />
                    </FormItem>
                  )}
                />

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-6 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </form>
            </Form>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>We'll get back to you within 24-48 hours. For urgent matters, please call us directly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
