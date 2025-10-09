import { Card } from "@/components/ui/card";

const Gallery = () => {
  const categories = [
    { name: "Campus Life", count: 24 },
    { name: "Events & Seminars", count: 38 },
    { name: "Workshops", count: 16 },
    { name: "Graduation Ceremonies", count: 12 },
    { name: "Sports & Activities", count: 20 },
    { name: "Infrastructure", count: 15 },
  ];

  return (
    <div className="w-full">
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Gallery
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Explore moments captured from campus life, events, and activities at IIMM Delhi
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary to-primary-light relative">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground">
                    <h3 className="font-heading text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-80">{category.count} Photos</p>
                  </div>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-all" />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Photo gallery functionality will be implemented with actual images from campus events and activities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
