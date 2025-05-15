import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EventCard = ({
  id,
  title,
  date,
  time,
  venue,
  category,
  imageUrl,
  price
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col  ">
      {/* Image and Category Badge */}
      
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <Badge 
          variant="secondary"
          className="absolute top-3 right-3 bg-white/90 text-sydney-purple"
        >
          {category}
        </Badge>
      </div>

      {/* Card Content */}
      <CardContent className="pt-4 flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-[#0EA5E9]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-[#0EA5E9]" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-[#0EA5E9]" />
            <span className="truncate">{venue}</span>
          </div>
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="border-t border-gray-100 pt-4 flex justify-between items-center">
        <span className="font-medium text-[#8B5CF6]">{price}</span>
        <Button asChild className="bg-sydney-purple bg-[#8B5CF6]/90">
          <Link to={`/events/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
