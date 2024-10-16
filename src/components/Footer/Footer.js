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
            <div class="login-bar">
                <h1>NEWS LETTER</h1>
                <form action="#" method="post">
                    <div className='content'>
                        <input type="text" placeholder="Enter your E-mail" required />
                        <button type="submit">Sign in</button>
                    </div>
                    <span>Sign up with your e-mail address to get the latest news & updates .</span>
                </form>

            </div>

        </div>
    )
}

export default Footer;