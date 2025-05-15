
import React, {  useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EventCard } from '@/components/EventCard';
// import { mockEvents, mockCategories } from '@/lib/mock-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Search } from 'lucide-react';

const EventsPage = () => {
  const { mockEvents, mockCategories }= useAppContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('date');




  
  // Filter events based on search term and category
  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date) > new Date(b.date) ? 1 : -1;
    }
    if (sortBy === 'price') {
      // This is a simplification - in a real app you'd parse the price better
      const aPrice = parseInt(a.price.replace(/[^\d]/g, '')) || 0;
      const bPrice = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
      return aPrice - bPrice;
    }
    // Alphabetical
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-sydney-blue py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Events in Sydney
            </h1>
            <p className="text-white/80 mb-6 max-w-2xl">
              Discover all the amazing events happening in Sydney. Filter by category, 
              search for specific events, or browse through our listings.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  type="text"
                  placeholder="Search events..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-white"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[180px] bg-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {mockCategories.map(category => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[180px] bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="price">Price: Low to High</SelectItem>
                  <SelectItem value="title">Name: A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {selectedCategory && (
              <div className="mt-4">
                <Badge 
                  variant="outline" 
                  className="bg-white text-sydney-blue"
                  onClick={() => setSelectedCategory('')}
                >
                  {selectedCategory} ×
                </Badge>
              </div>
            )}
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 flex justify-between items-center">
            <span className="text-gray-700">{sortedEvents.length} events found</span>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-gray-500" />
              <span className="text-gray-700">May 2025</span>
            </div>
          </div>
          
          {sortedEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your filters or search term
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
