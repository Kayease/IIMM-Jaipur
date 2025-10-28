import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users } from "lucide-react";

const Programmes = () => {
  const academicPrograms = [
    {
      title: "Post Graduate Diploma in Materials Management (PGDMM)",
      description: "A comprehensive one-year program covering all aspects of materials management, procurement, and supply chain management.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />
    },
    {
      title: "Certificate Courses",
      description: "Short-term courses focusing on specific areas of materials management, logistics, and supply chain operations.",
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      title: "Executive Development Programs",
      description: "Specialized programs designed for working professionals to enhance their skills in materials and supply chain management.",
      icon: <Users className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Academic Programmes</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our comprehensive range of academic programs designed to develop expertise in materials and supply chain management.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {academicPrograms.map((program, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {program.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
            <p className="text-muted-foreground">{program.description}</p>
            <Button variant="link" className="p-0 mt-4">
              Learn more →
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-muted/50 p-8 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Our Programs?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our academic advisors to learn more about our programs, admission requirements, and scholarship opportunities.
          </p>
          <Button size="lg">
            Contact Admissions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
