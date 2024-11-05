import React from 'react';
import './EventLogin.css';
import Navbar from '../../components/Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const EventLoginForm = () => {

  //   const signupRef = useRef(null);

  //   const scrollToSignup = () => {
  //     if (signupRef.current) {
  //       signupRef.current.scrollIntoView({ behavior: 'smooth' });
  //     }
  // };

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
          <h2>Event Planner Login to your account</h2>
          <p>Login to access all features!</p>

          <form>
      
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>

            <button type="submit" className="signup-button">Login</button>
          </form>

          <p className="login-link">
            Dont have an account? <a href="/signup">Create one</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default EventLoginForm;
