import React, {  useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EmailCaptureModal } from '@/components/EmailCaptureModal';
// import { getEventById, mockEvents } from '@/lib/mock-data';
import { Calendar, Clock, MapPin, Share2, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { EventsSection } from '@/components/EventsSection';
import { useAppContext } from '@/Context/AppContext';

const EventDetails = () => {
    const { id } = useParams();
    const { getEventById, mockEvents,selectedLocation }= useAppContext();
  console.log(id)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const event = id ? getEventById(id) : null;


  const similarEvents = mockEvents
    .filter(e => e.id !== id && e.category === event?.category)
    .slice(0, 4);

  const redirectUrl = `https://eventnext.onrender.com`;

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Event not found</h1>
            <Link to="/" className="text-sydney-purple hover:underline">
              Go back to homepage
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="relative h-[400px] lg:h-[500px]">
          <img 
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sydney-overlay"></div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="text-gray-500 hover:text-sydney-purple">Home</Link>
              <span className="text-gray-500">/</span>
              <Link to="/events" className="text-gray-500 hover:text-sydney-purple">Events</Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-800 font-medium truncate">{event.title}</span>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <Badge variant="outline" className="mb-4">
                    {event.category}
                  </Badge>
                  <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-sydney-blue" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-sydney-blue" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-sydney-blue" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-0">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-3">
                      <span className="text-gray-500 text-sm">Price</span>
                      <div className="text-2xl font-bold text-sydney-purple">
                        {event.price}
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-sydney-purple/90"
                      size="lg"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Get Tickets
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full mt-2"
                      size="sm"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Event
                    </Button>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">About this event</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <p>
                  Proin vitae ornare est. Curabitur varius...
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Event Location</h2>
                <div className="aspect-video bg-gray-100 rounded-lg">
 <iframe
  title="Event Location"
  className="w-full h-full rounded-lg"
  src={`https://www.google.com/maps?q=${encodeURIComponent(selectedLocation || 'Sydney')}&output=embed`}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>


                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Button 
                  size="lg"
                  className="bg-purple-600 hover:bg-sydney-purple/90"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Tickets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {similarEvents.length > 0 && (
            <EventsSection 
              title="Similar Events" 
              description="You might also be interested in these events" 
              events={similarEvents}
              viewAllLink={`/category/${event.category}`}
            />
          )}
        </div>
      </main>

      <EmailCaptureModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventTitle={event.title}
        redirectUrl={redirectUrl}
      />

      <Footer />
    </div>
  );
};

export default EventDetails;
