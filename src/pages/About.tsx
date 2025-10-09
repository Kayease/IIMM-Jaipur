import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import IimmImage from "@/assets/Herosection/iimm.png";
import InstituteHero from "@/components/InstituteHero";

const About = () => {
  return (

    <div className="w-full min-h-screen bg-gradient-to-b from-background to-muted/30">
      <InstituteHero
        title="About IIMM Delhi"
        subtitle="Building excellence in management and marketing education for over 25 years"
        image={IimmImage}
      />
      <section className="bg-[hsl(210_100%_20%)] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            About IIMM Delhi
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Building excellence in management and marketing education for over 25 years
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 bg-white rounded-xl shadow-sm p-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-foreground/90">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 2023, the Institute of Indian Management & Marketing (IIMM Delhi) has been
                at the forefront of management education in India. Our commitment to academic excellence,
                industry relevance, and student success has made us one of the most respected institutions
                in the field of management and marketing education.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                    <Eye size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-muted-foreground">
                    To be a global leader in management education, fostering innovation and ethical leadership.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full gradient-accent flex items-center justify-center">
                    <Target size={24} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-muted-foreground">
                    Delivering quality education that empowers students with knowledge and practical skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <Award size={24} className="text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">Values</h3>
                  <p className="text-muted-foreground">
                    Excellence, integrity, innovation, and commitment to student success guide everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">Our Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-muted-foreground">Alumni Worldwide</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Industry Partners</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Placement Rate</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-4xl font-bold text-primary mb-2">25+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
