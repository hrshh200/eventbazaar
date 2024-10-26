import React from 'react';
import Carousal from './Carousal';

const Slidesbar = () => {
    const slides = [
        {
            image: 'Marriage.jpg',
            title: 'Wedding Planning',
            subtitle: 'Inspiring ideas, elegant service, and expert wedding coordination'
        },
        {
            image: 'party.jpg',
            title: 'Party Planning',
            subtitle: 'Complete design service for party events, social and cooperate events'
        },
        {
            image: 'event.jpg',
            title: 'Anniversary Moments',
            subtitle: 'Capture memories that last a lifetime'
        }
    ];

    return (
        <div>
           <Carousal slides={slides}/>
        </div>
    );
};

export default Slidesbar;
