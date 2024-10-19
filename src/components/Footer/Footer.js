import React from 'react';
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
                            <button type="submit">Sign in</button>
                        </div>
                        <span>Sign up with your e-mail address to get the latest news & updates</span>
                    </form>

                </div>
                <div>
                    <div className='detailsFooter'>
                        <span>CONTACT US</span>
                        <span>Any where, Any city,445533</span>
                        <span>Call Us: +91888866668888</span>
                        <span>info@kingsevents.com</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;