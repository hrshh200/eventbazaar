import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './FeaturedEventCarousel.css'; // Optional: custom styles

const FeaturedEventCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel
                autoPlay
                interval={3000}
                showArrows
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop
                centerMode
                centerSlidePercentage={33.33}  // Adjust to control how many images show at once
                swipeable
                emulateTouch
                dynamicHeight={false}
            >
                <div className="carousel-card">
                    <img src="Marriage.jpg" alt="Event 1" />
                    {/* <p className="legend">Event 1</p> */}
                </div>
                <div className="carousel-card">
                    <img src="Marriage.jpg" alt="Event 2" />
                    {/* <p className="legend">Event 2</p> */}
                </div>
                <div className="carousel-card">
                    <img src="Marriage.jpg" alt="Event 3" />
                    {/* <p className="legend">Event 3</p> */}
                </div>
                <div className="carousel-card">
                    <img src="Marriage.jpg" alt="Event 4" />
                    {/* <p className="legend">Event 4</p> */}
                </div>
            </Carousel>
        </div>
    );
};

export default FeaturedEventCarousel;
