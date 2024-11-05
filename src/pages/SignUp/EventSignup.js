import React, { useState, useEffect } from 'react';
import './EventSignup.css';
import Navbar from '../../components/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import EventLoginTC from './EventLoginTC';

const EventSignupForm = () => {

    //   const signupRef = useRef(null);

    //   const scrollToSignup = () => {
    //     if (signupRef.current) {
    //       signupRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    const [showModal, setShowModal] = useState(true);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    // useEffect(() => {   
    //     setShowModal(true);
    //   }, []);


    return (
        <>
            {/* <Navbar /> */}
            <div className="signup-container">
                <div className="signup-image">
                    <div className="image-overlay"></div>
                </div>

                <div className="signup-form">
                    <NavLink to="/"><div className='homeDisplay'>
                        <img src='leftarrow.svg' />
                        <p>Back to home</p>
                    </div></NavLink>
                    <h2>Create an Account as an Event Planner</h2>
                    <p>Sign up to access all features!</p>

                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Event Name" required />
                        </div>

                        <div className="form-group">
                            <input type="text" placeholder="Full Name" required />
                        </div>

                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>

                        <div className="form-group">
                            <input type="password" placeholder="Password" required />
                        </div>

                        <div className="form-group">
                            <input type="password" placeholder="Confirm Password" required />
                        </div>

                        <button type="submit" className="signup-button">Sign Up</button>
                    </form>

                    <p className="login-link">
                        Already have an account? <a href="/login">Log in</a>
                    </p>
                </div>
            </div>
            <EventLoginTC show={showModal} onClose={closeModal} title="Terms and Conditions" />
        </>
    );
}

export default EventSignupForm;
