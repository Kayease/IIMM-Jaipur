import { FileText, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "IIMM Journal of Management Studies",
      type: "Journal",
      date: "Vol. 15, Issue 2 - 2024",
      description: "Peer-reviewed research articles on contemporary management practices and theories.",
    },
    {
      title: "Digital Transformation in Indian Businesses",
      type: "Research Paper",
      date: "January 2025",
      description: "Comprehensive study on digital adoption trends across Indian business sectors.",
    },
    {
      title: "Annual Report 2023-24",
      type: "Annual Report",
      date: "March 2024",
      description: "Complete overview of institutional achievements, programs, and future initiatives.",
    },
    {
      title: "Marketing Trends Newsletter",
      type: "Newsletter",
      date: "February 2025",
      description: "Monthly insights on emerging marketing trends and industry best practices.",
    },
  ];

  return (
    <div className="w-full">
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Publications & Research
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Explore our research papers, journals, and institutional publications
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg gradient-primary flex items-center justify-center">
                      <FileText size={28} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full mb-2">
                        {pub.type}
                      </span>
                      <h3 className="font-heading text-xl font-semibold mb-2">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{pub.date}</p>
                      <p className="text-muted-foreground mb-4">{pub.description}</p>
                      <Button variant="outline" size="sm">
                        <Download size={16} className="mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
