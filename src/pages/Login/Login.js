import React from 'react';
import './Login.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-header">
          <h1>dotwork</h1>
        </div>
        <h2>Log in to your Account</h2>
        <p>Welcome back! Select method to log in:</p>
        
        <div className="social-login-buttons">
          <button className="social-button google-button">Google</button>
          <button className="social-button facebook-button">Facebook</button>
        </div>
        
        <p className="divider">or continue with email</p>
        
        <form className="login-form">
          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button className="login-button">Log in</button>
        </form>
        
        <p className="signup-prompt">
          Don't have an account? <a href="#">Create an account</a>
        </p>
      </div>
      
      <div className="login-right">
        <div className="info-section">
          <div className="info-graphic">
            <div className="circle">
              <div className="app-icon">Slack</div>
              <div className="app-icon">Google</div>
              <div className="app-icon">Camera</div>
            </div>
          </div>
          <h3>Connect with every application.</h3>
          <p>Everything you need in an easily customizable dashboard.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
