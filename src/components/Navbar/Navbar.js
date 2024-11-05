import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ scrollToServices, scrollTofeatures, scrollToStayConnected, scrollIntoFooter }) => {
    return (
        <div className='container'>
            <div className='headingDisplay'>
                <img
                    className='logoDisplay'
                    src='Logo.png'
                    alt='Logo'
                />
            </div>
            <div className='displayList'>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>

                    {/* LOGIN with Dropdown */}
                    <li className="dropdown">
                        <li>LOGIN</li>
                        <div className="dropdown-content">
                            <NavLink to="/login/user">Login as Customer</NavLink>
                            <NavLink to="/login/eventuser">Login as Event Planner</NavLink>
                        </div>
                    </li>

                    {/* SIGN UP with Dropdown */}
                    <li className="dropdown">
                    <li>SIGN UP</li>
                        <div className="dropdown-content">
                            <NavLink to="/signup/user">SignUp as Customer</NavLink>
                            <NavLink to="/signup/eventuser">SignUp as Event Planner</NavLink>
                        </div>
                    </li>

                    <button onClick={scrollToServices}><li>SERVICES</li></button>
                    <button onClick={scrollTofeatures}><li>FEATURES</li></button>
                    <button onClick={scrollToStayConnected}><li>BLOG</li></button>
                    <button onClick={scrollIntoFooter}><li>CONTACT US</li></button>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
