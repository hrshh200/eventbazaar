import React from 'react';
import './Navbar.css';

const Navbar = ({scrollToServices,scrollTofeatures}) => {
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
                    <li>LOGIN</li>
                    <button onClick={scrollToServices}><li>SERVICES</li></button>
                    <button onClick={scrollTofeatures}><li>FEATURES</li></button>
                    <li>BLOG</li>
                    <li>SHOP</li>
                    <li>RSVP</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar