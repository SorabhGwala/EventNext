import React from 'react';
import { EventCard } from './EventCard';

export const EventsSection = ({ 
  title, 
  description, 
  events,
  viewAllLink
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            {description && (
              <p className="text-gray-600 max-w-2xl">{description}</p>
            )}
          </div>
          {viewAllLink && (
            <a 
              href={viewAllLink}
              className="text-purple-800 hover:underline mt-2 md:mt-0"
            >
              View all
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard 
              key={event.id}
              {...event}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
