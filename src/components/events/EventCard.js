import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { EventDetails } from './EventDetails';
import { EventImage } from './EventImage';
import { BookingButton } from '../ui/BookingButton';

export const EventCard = ({ title, date, time, location, capacity, image, price, available }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <EventImage image={image} title={title} available={available} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <EventDetails 
          date={date}
          time={time}
          location={location}
          capacity={capacity}
        />
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">${price}</span>
          <BookingButton available={available} />
        </div>
      </div>
    </div>
  );
};