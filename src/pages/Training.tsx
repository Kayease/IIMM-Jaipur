import { Award, Monitor, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Training = () => {
  const programs = [
    {
      icon: Award,
      title: "Professional Development Programs",
      duration: "3-6 Months",
      description: "Comprehensive training for working professionals to enhance management and leadership skills.",
      features: ["Weekend Classes", "Industry Projects", "Certification"],
    },
    {
      icon: Monitor,
      title: "Online Certification Courses",
      duration: "Self-Paced",
      description: "Flexible online programs covering digital marketing, finance, and business analytics.",
      features: ["24/7 Access", "Video Lectures", "Practical Assignments"],
    },
    {
      icon: BookOpen,
      title: "Executive Education Workshops",
      duration: "1-3 Days",
      description: "Intensive workshops designed for senior executives and business leaders.",
      features: ["Expert Faculty", "Case Studies", "Networking"],
    },
    {
      icon: TrendingUp,
      title: "Corporate Training Solutions",
      duration: "Customized",
      description: "Tailored training programs for organizations to upskill their workforce.",
      features: ["On-site Training", "Custom Content", "ROI Focused"],
    },
  ];

  return (
    <div className="w-full">
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Training & Certification
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Enhance your skills with our industry-recognized training programs and certifications
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 rounded-full gradient-primary flex items-center justify-center">
                    <program.icon size={32} className="text-primary-foreground" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-3">
                    {program.duration}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Upskill?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Invest in your professional development with our comprehensive training programs.
          </p>
          <Button size="lg" className="gradient-accent text-accent-foreground">
            Enroll Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Training;
