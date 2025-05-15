import React from 'react';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/Context/AppContext';

export const Hero = () => {
     const { selectedLocation, setSelectedLocation } = useAppContext();
  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mb-12">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Sydney Opera House" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sydney-overlay"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover Events in <span className="text-sydney-blue">{selectedLocation}</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100">
          Find the best events happening in {selectedLocation}. From concerts to workshops, 
          sports to conferences — never miss out on what's happening in the city.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-sydney-purple/90">
            Browse Events
          </Button>
          <Button size="lg" variant="outline" className="text-stone-600 border-black hover:bg-white hover:text-purple-800">
            Submit Your Event
          </Button>
        </div>
      </div>
    </div>
  );
};

