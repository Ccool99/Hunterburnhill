import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin, Clock, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Event } from "@shared/schema";
const toursHeader = 'https://i.postimg.cc/XqJNHDJm/tours-header.png';

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric", 
    month: "long",
    day: "numeric"
  });
}

function formatPrice(price: string | null) {
  if (!price) return "TBA";
  return `$${price}`;
}

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden" style={{ borderColor: '#CD5C5C', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2 font-space" style={{ color: '#FFA500' }}>
              {event.title}
            </CardTitle>
            {event.featured && (
              <Badge className="mb-2" style={{ backgroundColor: '#CD5C5C', color: 'white' }}>
                Featured Event
              </Badge>
            )}
          </div>
          <Badge variant="outline" style={{ 
            borderColor: event.status === 'upcoming' ? '#FFA500' : '#808080',
            color: event.status === 'upcoming' ? '#FFA500' : '#808080'
          }}>
            {event.status?.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: '#FFA500' }} />
              <span className="font-medium" style={{ color: '#FFA500' }}>
                {formatDate(event.date)}
              </span>
            </div>
            
            {event.time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: '#808080' }} />
                <span style={{ color: '#808080' }}>{event.time}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" style={{ color: '#808080' }} />
              <span style={{ color: '#808080' }}>
                {event.venue}, {event.city}
                {event.state && `, ${event.state}`}
              </span>
            </div>
            
            {event.capacity && (
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" style={{ color: '#808080' }} />
                <span style={{ color: '#808080' }}>Capacity: {event.capacity}</span>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            <div className="text-right">
              <div className="text-2xl font-bold font-space" style={{ color: '#FFA500' }}>
                {formatPrice(event.price)}
              </div>
              <div className="text-sm" style={{ color: '#808080' }}>per ticket</div>
            </div>
            
            {event.ticketUrl && (
              <Button 
                className="w-full font-outfit" 
                style={{ backgroundColor: '#CD5C5C' }}
                onClick={() => window.open(event.ticketUrl!, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Buy Tickets
              </Button>
            )}
          </div>
        </div>
        
        {event.description && (
          <div className="pt-4 border-t" style={{ borderColor: '#404040' }}>
            <p style={{ color: '#808080' }} className="font-outfit">
              {event.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Tours() {
  const { data: events, isLoading, error } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const { data: featuredEvents } = useQuery<Event[]>({
    queryKey: ["/api/events/featured"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
        <div className="animate-spin w-8 h-8 border-4 border-t-transparent rounded-full" style={{ borderColor: '#FFA500' }} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#CD5C5C' }}>Unable to Load Tour Dates</h2>
          <p style={{ color: '#808080' }}>Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${toursHeader})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-western text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFA500' }}>
            TOUR DATES
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed font-outfit" style={{ color: '#E0E0E0' }}>
            Experience John Lion Joseph's country rock space fusion live across Canada
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-outfit" style={{ color: '#CD5C5C' }}>
            From intimate acoustic evenings to full persona performances
          </p>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents && featuredEvents.length > 0 && (
        <section id="featured-shows" className="py-16" style={{ backgroundColor: 'rgba(149, 69, 53, 0.1)' }}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 
              className="font-space text-3xl md:text-4xl font-bold text-center mb-12 cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ color: '#FFA500' }}
              onClick={() => {
                const element = document.getElementById('featured-shows');
                if (element) {
                  const navHeight = 64; // Navigation bar height
                  const elementPosition = element.offsetTop - navHeight;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              FEATURED SHOWS
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Upcoming Events */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-space text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#FFA500' }}>
            UPCOMING PERFORMANCES
          </h2>
          
          {events && events.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#808080' }}>
                No Upcoming Shows
              </h3>
              <p style={{ color: '#808080' }} className="mb-8 font-outfit">
                Check back soon for new tour dates and announcements.
              </p>
              <Button 
                variant="outline" 
                className="font-outfit"
                style={{ borderColor: '#FFA500', color: '#FFA500' }}
              >
                Join Mailing List for Updates
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 pb-32" style={{ background: 'linear-gradient(to top, #954535, #000000)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-space text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFA500' }}>
            NEVER MISS A SHOW
          </h2>
          <p className="text-lg mb-8 font-outfit" style={{ color: '#808080' }}>
            Get notified when new tour dates are announced in your area
          </p>
          <Button 
            className="px-8 py-3 font-outfit text-lg"
            style={{ backgroundColor: '#CD5C5C' }}
          >
            Subscribe to Tour Updates
          </Button>
        </div>
      </section>
      
    </div>
  );
}
