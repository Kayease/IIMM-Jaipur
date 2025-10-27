import { Users, Building2, CheckCircle, ArrowRight, MapPin, ChevronLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Membership = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSubpage = location.pathname !== '/membership' && location.pathname !== '/';
  
  // Get the current subpage title
  const getSubpageTitle = () => {
    const path = location.pathname;
    if (path.includes('why-join')) return 'Why Join IIMM';
    if (path.includes('types')) return 'Membership Types';
    if (path.includes('apply')) return 'Application Forms';
    if (path.includes('branches')) ;
    
  };

  // If we're on a subpage, render the subpage layout
  if (isSubpage) {
    return (
      <div className="w-full">
        {/* Subpage header */}
        <div className="bg-muted/40 py-8">
          <div className="container mx-auto px-4">
            <Button 
              variant="ghost" 
              className="mb-4"
              onClick={() => navigate('/membership')}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Membership
            </Button>
            <h1 className="font-heading text-3xl font-bold">{getSubpageTitle()}</h1>
          </div>
        </div>
        
        {/* Subpage content */}
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </div>
    );
  }

  // Main membership page content
  return (
    <div className="w-full">
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Membership Programs
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Join our community of professionals and institutions committed to excellence
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Individual Membership */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
                  <Users size={32} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-center mb-4">
                  Individual Membership
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Perfect for professionals, students, and aspiring managers looking to enhance their
                  careers and stay connected with the industry.
                </p>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">₹5,000</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <Button 
                  className="w-full gradient-accent text-accent-foreground" 
                  size="lg"
                  onClick={() => navigate('/membership/apply')}
                >
                  Apply for Membership
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>

            {/* Institutional Membership */}
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
                  <Building2 size={32} className="text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-center mb-4">
                  Institutional Membership
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Designed for educational institutions, corporate organizations, and training centers
                  seeking collaboration and resource sharing.
                </p>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-primary">₹25,000</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <Button 
                  className="w-full gradient-primary text-primary-foreground" 
                  size="lg"
                  onClick={() => navigate('/membership/apply?type=institutional')}
                >
                  Inquire Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate('/membership/why-join')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
             
                <p className="text-sm text-muted-foreground mt-2">Discover the benefits of becoming a member</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate('/membership/types')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Membership Types</h3>
                <p className="text-sm text-muted-foreground mt-2">Choose the right membership for you</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate('/membership/apply')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Apply Now</h3>
                <p className="text-sm text-muted-foreground mt-2">Start your membership application</p>
              </CardContent>
            </Card>
            
            <Card 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate('/membership/branches')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold">Our Branches</h3>
                <p className="text-sm text-muted-foreground mt-2">Find your nearest IIMM branch</p>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-bold text-center mb-8">Membership Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Professional Development</h4>
                    <p className="text-sm text-muted-foreground">Access to exclusive training and certification programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Networking</h4>
                    <p className="text-sm text-muted-foreground">Connect with industry leaders and peers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Resources</h4>
                    <p className="text-sm text-muted-foreground">Access to research, publications, and case studies</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Career Support</h4>
                    <p className="text-sm text-muted-foreground">Job board and career development resources</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Discounts</h4>
                    <p className="text-sm text-muted-foreground">Exclusive member discounts on events and services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Recognition</h4>
                    <p className="text-sm text-muted-foreground">Professional certification and industry recognition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of a thriving community of professionals and institutions committed to excellence
            in management education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership/apply">
              <Button size="lg" className="gradient-primary text-primary-foreground">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
