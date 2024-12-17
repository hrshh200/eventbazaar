import React, {useRef} from 'react';
import "./Home.css";
import Slidesbar from './Slides';
import FeaturedEventCarousel from './FeaturedEventCarousel';
import Navbar from '../Navbar/Navbar';
import ConnectBanner from './ConnectBanner';
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const servicesRef = useRef(null);
    const FeaturedEventsRef = useRef(null); 
    const StayConnectedRef = useRef(null);
    const footerRef = useRef(null);
    const navigate = useNavigate();

    const scrollToServices = () => {
        if (servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollIntoFooter = () =>{
        if(footerRef.current){
            footerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    const scrollTofeatures = () => {
        if (FeaturedEventsRef.current) {
            FeaturedEventsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToStayConnected = () => {
        if (StayConnectedRef.current) {
            StayConnectedRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWeddingsCards = () =>{
        console.log("Wedding cards clicked");
        navigate('/weddingevents')
    }

    const handleSocialCards = () =>{
        console.log("Wedding cards clicked");
        navigate('/socialevents')
    }

    const handleCorporateCards = () =>{
        console.log("Wedding cards clicked");
        navigate('/corporateevents')
    }


    return (
        <div>
            <Navbar scrollToServices={scrollToServices} scrollTofeatures={scrollTofeatures} scrollToStayConnected={scrollToStayConnected} scrollIntoFooter={scrollIntoFooter}/>
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
                        <div className="cardFront" onClick={handleWeddingsCards}>
                            <img src="wedding.svg" alt="Weddings" />
                            <span>Weddings</span>
                            <p>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis.</p>
                            <p className="morelink">VIEW MORE</p>
                        </div>

                        {/* <!-- Back Side Content --> */}
                        <div className="cardBackWedding" onClick={handleWeddingsCards}>
                            <img src="weddingback.svg" alt="Weddings" />
                            <span>Weddings</span>
                        </div>
                    </div>
                </div>

                <div className="cardsContainer">
                    <div className="card">
                        {/* <!-- Front Side Content --> */}
                        <div className="cardFront"  onClick={handleCorporateCards}>
                            <img src="cooperate.svg" alt="Cooperate" />
                            <span>Corporate</span>
                            <p>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis.</p>
                            <p className="morelink">VIEW MORE</p>
                        </div>

                        {/* <!-- Back Side Content --> */}
                        <div className="cardBackCooperate" onClick={handleCorporateCards}>
                            <img src="cooperateback.svg" alt="Cooperate" />
                            <span>Corporate</span>
                        </div>
                    </div>
                </div>

                <div className="cardsContainer">
                    <div className="card">
                        {/* <!-- Front Side Content --> */}
                        <div className="cardFront" onClick={handleSocialCards}>
                            <img src="social.svg" alt="Weddings" />
                            <span>Social</span>
                            <p>Vestibulum iaculis lacinia est. Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipis.</p>
                            <p className="morelink">VIEW MORE</p>
                        </div>

                        {/* <!-- Back Side Content --> */}
                        <div className="cardBackSocial" onClick={handleSocialCards}>
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
            <div ref={StayConnectedRef}><ConnectBanner /></div>
            <div ref={footerRef}><Footer /></div>
        </div>
    )
}

export default Home;
