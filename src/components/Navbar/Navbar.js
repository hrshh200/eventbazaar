import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ scrollToServices, scrollTofeatures, scrollToStayConnected, scrollIntoFooter}) => {
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
                    <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
                    <li><NavLink to="/login" activeClassName="active">LOGIN</NavLink></li>
                    <li><NavLink to="/signup" activeClassName="active">SIGN UP</NavLink></li>
                    <button onClick={scrollToServices}><li>SERVICES</li></button>
                    <button onClick={scrollTofeatures}><li>FEATURES</li></button>
                    <button onClick={scrollToStayConnected}><li>BLOG</li></button>
                    <button onClick={scrollIntoFooter}><li>CONTACT US</li></button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;