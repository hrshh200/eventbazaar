import React, {useRef} from 'react';
import "./Home.css";
import Slidesbar from './Slides';
import FeaturedEventCarousel from './FeaturedEventCarousel';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    const servicesRef = useRef(null);
    const FeaturedEventsRef = useRef(null);

    const scrollToServices = () => {
        if (servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollTofeatures = () => {
        if (FeaturedEventsRef.current) {
            FeaturedEventsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar scrollToServices={scrollToServices} scrollTofeatures={scrollTofeatures}/>
            <Slidesbar />
            <div className='events' ref={servicesRef}>
                <span>Making Your Event Unforgettable</span>
                <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div className='eventCards'>
                <div className="cardsContainer">
                    <div className="card">
                        {/* <!-- Front Side Content --> */}
                        <div className="cardFront">
                            <img src="wedding.svg" alt="Weddings" />
                            <span>Weddings</span>
                            <p>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis.</p>
                            <p className="morelink">VIEW MORE</p>
                        </div>

                        {/* <!-- Back Side Content --> */}
                        <div className="cardBackWedding">
                            <img src="weddingback.svg" alt="Weddings" />
                            <span>Weddings</span>
                        </div>
                    </div>
                </div>

                <div className="cardsContainer">
                    <div className="card">
                        {/* <!-- Front Side Content --> */}
                        <div className="cardFront">
                            <img src="cooperate.svg" alt="Weddings" />
                            <span>Corporate</span>
                            <p>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis.</p>
                            <p className="morelink">VIEW MORE</p>
                        </div>

                        {/* <!-- Back Side Content --> */}
                        <div className="cardBackCooperate">
                            <img src="cooperateback.svg" alt="Cooperate" />
                            <span>Corporate</span>
                        </div>
                    </div>
                </div>

                <div className="cardsContainer">
                    <div className="card">
                        {/* <!-- Front Side Content --> */}
                        <div className="cardFront">
                            <img src="social.svg" alt="Weddings" />
                            <span>Social</span>
                            <p>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis.</p>
                            <p className="morelink">VIEW MORE</p>
                        </div>

                        {/* <!-- Back Side Content --> */}
                        <div className="cardBackSocial">
                            <img src="socialback.svg" alt="Social" />
                            <span>Social</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='events' ref={FeaturedEventsRef}>
                <span>Featured Events</span>
                {/* <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p> */}
            </div>
            <FeaturedEventCarousel />
        </div>
    )
}

export default Home;
