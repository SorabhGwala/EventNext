import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EventsSection } from '@/components/EventsSection';
import { CategorySection } from '@/components/CategorySection';
import { Footer } from '@/components/Footer';
// import { trendingEvents, upcomingEvents, mockCategories } from '@/lib/mock-data';
import { Separator } from '@/components/ui/separator';
import { useAppContext } from '@/Context/AppContext';

const Index = () => {
   const { trendingEvents, upcomingEvents, mockCategories,selectedLocation } = useAppContext();
   
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <main>
        <EventsSection 
          title={`Trending in ${selectedLocation}`} 
          description={`The hottest events happening in ${selectedLocation} right now`}
          events={trendingEvents}
          viewAllLink="/events"
        />
        
        <Separator className="max-w-7xl mx-auto" />
        
        <CategorySection categories={mockCategories} />
        
        <EventsSection 
          title="Upcoming Events" 
          events={upcomingEvents}
          viewAllLink="/events"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
