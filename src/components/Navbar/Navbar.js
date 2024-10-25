import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='container'>
            <div className='headingDisplay'>
                <img
                    className='logoDisplay'
                    src='Logo.png' />
            </div>
            {/* <img className='ImageDisplay' src='Image1.png'/> */}
            <div className='displayList'>
                <ul>
                    <li>HOME</li>
                    <li>PAGES</li>
                    <li>PORTFOLIO</li>
                    <li>FEATURES</li>
                    <li>BLOG</li>
                    <li>SHOP</li>
                    <li>RSVP</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar