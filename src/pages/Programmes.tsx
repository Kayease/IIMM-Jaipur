import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  registerLink?: string;
  isPast?: boolean;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  description,
  imageUrl = "/placeholder-event.jpg",
  registerLink,
  isPast = false
}: EventCardProps) => (
  <Card className="mb-6 overflow-hidden transition-all hover:shadow-lg">
    <div className="md:flex">
      <div className="md:flex-shrink-0 md:w-1/3">
        <img 
          className="h-48 w-full object-cover md:h-full" 
          src={imageUrl} 
          alt={title} 
        />
      </div>
      <div className="p-6 md:w-2/3">
        <CardHeader className="p-0 pb-4">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground space-x-4 pt-2">
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {date}</div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {time}</div>
            <div className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {location}</div>
          </div>
        </CardHeader>
        <CardContent className="p-0 py-4">
          <p className="text-foreground">{description}</p>
        </CardContent>
        <CardFooter className="p-0 pt-2">
          {!isPast && registerLink ? (
            <Button asChild>
              <a href={registerLink} target="_blank" rel="noopener noreferrer">
                Register Now <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : (
            <div className="text-sm text-muted-foreground">
              {isPast ? 'This event has concluded.' : 'Registration details coming soon.'}
            </div>
          )}
        </CardFooter>
      </div>
    </div>
  </Card>
);

const Programmes = () => {
  const upcomingEvents = [
    {
      title: "Annual Materials Management Conference 2023",
      date: "November 15-17, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "The Leela Palace, New Delhi",
      description: "Join industry leaders and experts for the premier materials management conference of the year. Featuring keynote speakers, panel discussions, and networking opportunities.",
      imageUrl: "/conference-2023.jpg",
      registerLink: "#"
    },
    {
      title: "Supply Chain Innovation Workshop",
      date: "December 5, 2023",
      time: "10:00 AM - 4:00 PM",
      location: "India Habitat Centre, New Delhi",
      description: "Interactive workshop focusing on the latest innovations and technologies transforming supply chain and materials management.",
      imageUrl: "/workshop-2023.jpg"
    }
  ];

  const pastEvents = [
    {
      title: "Procurement Excellence Summit 2023",
      date: "September 10-12, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Taj Palace, New Delhi",
      description: "Focused on procurement strategies, digital transformation, and sustainable sourcing practices in the current economic landscape.",
      imageUrl: "/summit-2023.jpg",
      isPast: true
    },
    {
      title: "IIMM Annual General Meeting 2023",
      date: "August 20, 2023",
      time: "3:00 PM - 6:00 PM",
      location: "IIMM Delhi Chapter Office",
      description: "Annual general meeting for IIMM members to discuss the year's achievements and plans for the future.",
      imageUrl: "/agm-2023.jpg",
      isPast: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Programmes & Meetings</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with our upcoming events, conferences, and meetings. Engage with industry experts and expand your professional network.
        </p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upcoming" className="space-y-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <EventCard key={`upcoming-${index}`} {...event} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No upcoming events scheduled at the moment.</p>
              <p className="text-sm text-muted-foreground mt-2">Please check back later or subscribe to our newsletter for updates.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          {pastEvents.map((event, index) => (
            <EventCard key={`past-${index}`} {...event} isPast={true} />
          ))}
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-muted/50 p-8 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Hosting an Event?</h2>
          <p className="text-muted-foreground mb-6">
            Partner with IIMM to organize conferences, workshops, or seminars. Contact us to discuss collaboration opportunities.
          </p>
          <Button size="lg">
            Contact Our Events Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
