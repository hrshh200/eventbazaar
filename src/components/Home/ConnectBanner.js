import React from 'react';
import "./ConnectBanner.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ConnectBanner = () => {
    return (
        <div>
            <div className='containerBanner'>
                <div className='containerBox'>
                    <div className='innerContainer'>
                        <div className='textBox'>
                            <a href='#'><span className='emailText'>@evebweddingsandevents</span></a>
                            <p className='stayText'>Stay Connected</p>
                        </div>
                        <div className='connect'>
                            <p>Follow us on social media channels</p>
                            <div className="stay-icons">
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                    <FaFacebookF className="sicon" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                    <FaInstagram className="sicon" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                                    <FaLinkedinIn className="sicon" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                    <FaTwitter className="sicon" />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                    <FaWhatsapp className="sicon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='containerImage'>
                        <div className='innerContainerImage'>
                            <img src='c1.jpg' />
                            <img src='c2.jpg' />
                            <img src='c3.jpg' />
                        </div>
                        <div className='innerContainerImage'>
                            <img src='c4.jpg' />
                            <img src='c5.jpg' />
                            <img src='c6.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectBanner;