import React from 'react';

export const EventImage = ({ image, title, available }) => {
  return (
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {!available && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white font-semibold text-lg">Fully Booked</span>
        </div>
      )}
    </div>
  );
};