import React from 'react';

export const BookingButton = ({ available }) => {
  return (
    <button
      disabled={!available}
      className={`px-4 py-2 rounded-lg font-semibold ${
        available
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
    >
      {available ? 'Book Now' : 'Sold Out'}
    </button>
  );
};