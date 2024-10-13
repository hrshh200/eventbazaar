import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='container'>
            <div className='headingDisplay'>
                <img
                    className='logoDisplay'
                    src='Logo.png' />
                <span className='headingTitleWed'>
                    Events and Weddings
                </span>
            </div>
            <img className='ImageDisplay' src='Image1.png'/>
            <div className='displayList'>
                <ul>
                    <li>Home</li>
                    <li>Sevices</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <div className='detailsList'>
                    <span>+91 88866668888</span>
                    <span>info@kingsevents.com</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar