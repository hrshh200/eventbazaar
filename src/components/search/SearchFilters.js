import React from 'react';
import { SearchInput } from './SearchInput';
import { DateFilter } from './DateFilter';
import { PriceFilter } from './PriceFilter';

export const SearchFilters = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SearchInput />
        <DateFilter />
        <PriceFilter />
      </div>
    </div>
  );
};