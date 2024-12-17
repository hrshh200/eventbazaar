import React from 'react';
import { SearchFilters } from '../../components/search/SearchFilters';
import { EventCard } from '../../components/events/EventCard';
import { events } from '../../data/event';

const Corporate = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 font-sans">
                        Find Your Perfect Corporate Venue
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover and book beautiful venues for your special day. We offer a curated
                        selection of stunning locations to make your Corporate dreams come true.
                    </p>
                </div>

                <SearchFilters />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Corporate;