import React from 'react';
import './Navbar.css';

const Navbar = ({scrollToServices,scrollTofeatures,scrollToStayConnected}) => {
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
                    <button onClick={scrollToStayConnected}><li>BLOG</li></button>
                    <li>SHOP</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar