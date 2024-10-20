import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='containerFooter'>
            <div className='FooterHeading'>
                <h1>
                    Event Bazaar
                </h1>
                <span>
                    Events and Weddings
                </span>
            </div>
            <div className='footer'>
                <div class="login-bar">
                    <h1>NEWS LETTER</h1>
                    <form action="#" method="post">
                        <div className='content'>
                            <input type="text" placeholder="Enter your E-mail" required />
                            <button type="submit">Subscribe</button>
                        </div>
                        <span>Sign up with your e-mail address to get the latest news & updates</span>
                    </form>

                </div>
                <div className='headingIcons'>
                    <h1 className='heading'>Connect to us:</h1>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookF className="icon" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedinIn className="icon" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className="icon" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <FaWhatsapp className="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <h1 className='footercopyright'
            >© 2024 Event Bazaar. All rights reserved.</h1>
        </div>
    )
}

export default Footer;