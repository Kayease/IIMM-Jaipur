import { BookOpen, GraduationCap, FileText, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Academics = () => {
  const courses = [
    {
      title: "MBA - Master of Business Administration",
      duration: "2 Years",
      description: "Comprehensive program covering all aspects of business management and leadership.",
    },
    {
      title: "PGDM - Post Graduate Diploma in Management",
      duration: "1 Year",
      description: "Focused program for working professionals seeking advanced management skills.",
    },
    {
      title: "Digital Marketing Certificate",
      duration: "6 Months",
      description: "Industry-oriented program covering SEO, SEM, social media, and analytics.",
    },
    {
      title: "Financial Management Program",
      duration: "8 Months",
      description: "Specialized training in financial analysis, planning, and investment strategies.",
    },
  ];

  return (
    <div className="w-full">
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Academic Programs
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Discover our range of industry-aligned programs designed to shape future leaders
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Courses Offered</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse range of programs tailored to meet industry demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full gradient-primary flex items-center justify-center">
                      <GraduationCap size={24} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold mb-2">{course.title}</h3>
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-3">
                        {course.duration}
                      </span>
                      <p className="text-muted-foreground">{course.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                  <BookOpen size={32} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Curriculum</h3>
                <p className="text-muted-foreground mb-4">
                  Modern, industry-relevant curriculum designed by experts
                </p>
                <Link to="/academics/curriculum">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                  <FileText size={32} className="text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Admission</h3>
                <p className="text-muted-foreground mb-4">
                  Simple and transparent admission process
                </p>
                <Link to="/academics/admission">
                  <Button variant="outline">Apply Now</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <Calendar size={32} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Calendar</h3>
                <p className="text-muted-foreground mb-4">
                  View academic calendar and important dates
                </p>
                <Link to="/academics/calendar">
                  <Button variant="outline">View Calendar</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
