import React from 'react';
import Home from './Home';

const Slidesbar = () => {
    const slides = [
        {
            image: 'Marriage.jpg',
            title: 'Wedding Planning',
            subtitle: 'Inspiring ideas, elegant service, and expert wedding coordination'
        },
        {
            image: 'Marriage.jpg',
            title: 'Wedding Venues',
            subtitle: 'Find the perfect place to say "I do"'
        },
        {
            image: 'Marriage.jpg',
            title: 'Memorable Moments',
            subtitle: 'Capture memories that last a lifetime'
        }
    ];

    return (
        <div>
            <Home slides={slides} />
        </div>
    );
};

export default Slidesbar;
