import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export const EventDetails = ({ date, time, location, capacity }) => {
  return (
    <div className="space-y-2 mb-4">
      <div className="flex items-center text-gray-600">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Clock className="w-4 h-4 mr-2" />
        <span>{time}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Users className="w-4 h-4 mr-2" />
        <span>{capacity} guests</span>
      </div>
    </div>
  );
};