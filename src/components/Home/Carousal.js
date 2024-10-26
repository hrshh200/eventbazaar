import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousal.css';

const DemoCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the current index when the slide changes
  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      showStatus={false}
      onChange={handleSlideChange} // Detect slide change
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt="carousel slide" />
          <div
            className={`overlayTitle ${currentIndex === index ? 'animate' : ''}`}
          >
            <div className="overlayAdjust">
              <span>{slide.title}</span>
              <h1>{slide.subtitle}</h1>
              <button>View our work!</button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;
