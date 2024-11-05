// Modal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventLoginTC.css';

const EventLoginTC = ({ show, onClose, title }) => {

    const navigate = useNavigate();

    if (!show) return null;

    const routetohome = () => {
        console.log("Send this to home");
        navigate('/');
    }

    return (
        <div className="modal-overlay">
            <div className="modal-banner">
                <h2>{title}</h2>
                <button className="modal-close" onClick={routetohome}>
                    &times;
                </button>
                <div className="modal-content">
                    <p>
                        Welcome to our application. By accessing or using our service, you agree to be bound by the terms and conditions outlined here.
                        Please read them carefully before proceeding.
                    </p>
                    <p>
                        <strong>1. Usage Rules:</strong> You agree not to misuse our services. This includes unauthorized attempts to access our systems
                        or interfere with the proper working of our platform.
                    </p>
                    <p>
                        <strong>2. Privacy Policy:</strong> Your privacy is important to us. Please review our Privacy Policy for information on how we
                        collect, use, and protect your data.
                    </p>
                    <p>
                        <strong>3. Disclaimer:</strong> Our service is provided "as is" without warranties of any kind. We do not guarantee uninterrupted
                        or error-free service.
                    </p>
                </div>
                <div className='acceptdeclineButtons'>
                    <button onClick={onClose}>Ok, I Accept</button>
                    <button onClick={routetohome}>No, I Decline</button>
                </div>
            </div>
        </div>
    );
};

export default EventLoginTC;
