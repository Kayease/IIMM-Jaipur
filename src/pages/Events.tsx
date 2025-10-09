import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      date: "Mar 15, 2025",
      time: "10:00 AM - 4:00 PM",
      title: "Digital Marketing Workshop",
      location: "IIMM Campus, Auditorium A",
      type: "Workshop",
      description: "Hands-on workshop covering latest trends in digital marketing and social media strategies.",
    },
    {
      date: "Mar 22, 2025",
      time: "9:00 AM - 6:00 PM",
      title: "Leadership Summit 2025",
      location: "Conference Hall, Main Building",
      type: "Conference",
      description: "Annual summit featuring industry leaders discussing future of business leadership.",
    },
    {
      date: "Apr 5, 2025",
      time: "6:00 PM - 9:00 PM",
      title: "Alumni Networking Event",
      location: "IIMM Campus Lawn",
      type: "Networking",
      description: "Connect with alumni, share experiences, and build professional relationships.",
    },
    {
      date: "Apr 18, 2025",
      time: "2:00 PM - 5:00 PM",
      title: "Financial Planning Seminar",
      location: "Seminar Room 203",
      type: "Seminar",
      description: "Expert insights on investment strategies and financial management.",
    },
  ];

  return (
    <div className="w-full">
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Events & Activities
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Stay updated with our latest workshops, seminars, and networking events
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                    {/* Date Box */}
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg gradient-accent flex flex-col items-center justify-center text-accent-foreground">
                      <Calendar size={24} className="mb-1" />
                      <span className="text-xs font-semibold text-center px-2">{event.date}</span>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex-shrink-0">
                      <Button className="gradient-primary text-primary-foreground">
                        Register
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

export default Events;
