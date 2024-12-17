import React from 'react';
import { DollarSign } from 'lucide-react';

export const PriceFilter = () => {
  return (
    <div className="relative">
      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
        <option value="">Price Range</option>
        <option value="0-1000">$0 - $1,000</option>
        <option value="1000-5000">$1,000 - $5,000</option>
        <option value="5000+">$5,000+</option>
      </select>
    </div>
  );
};