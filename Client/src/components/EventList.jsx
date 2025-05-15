import React from 'react';
import { EventCard } from './EventCard'; // Adjust path as necessary
import { mockEvents } from '../lib/mock-data'; // Assuming mockData.js contains mockEvents
import { useAppContext } from '@/Context/AppContext';

const EventList = () => {
    const { mockEvents} = useAppContext();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEvents.map(event => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          time={event.time}
          venue={event.venue}
          category={event.category}
          imageUrl={event.imageUrl}
          price={event.price}
        />
      ))}
    </div>
  );
};

export default EventList;
