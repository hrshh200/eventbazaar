import React from 'react';
import "./Home.css";
import Slidesbar from './Slides';

const Home = () => {

    return (
        <div>
            <Slidesbar />
            <div className='events'>
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
        </div>
    )
}

export default Home;
