import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EventsSection } from '@/components/EventsSection';
// import { trendingEvents } from '@/lib/mock-data';
import { Separator } from '@/components/ui/separator';


const EventsCategoryPage = () => {

    const { category } = useParams(); // Removed TypeScript type
    
    // In a real application, you would fetch events based on category
    const { trendingEvents}= useAppContext();
    const categoryEvents = trendingEvents.slice(0, 6);
    
    const formatCategoryName = (category) => {
        if (!category) return '';
        return category.charAt(0).toUpperCase() + category.slice(1);
    };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-2">{formatCategoryName(category || '')} Events in Sydney</h1>
          <p className="text-gray-600 mb-8">
            Discover the best {category} events Sydney has to offer
          </p>

          <Separator className="my-8" />

          <EventsSection
            title={`${formatCategoryName(category || '')} Events`}
            description={`Top ${category} events happening in Sydney`}
            events={categoryEvents}
            viewAllLink="/events"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventsCategoryPage;
