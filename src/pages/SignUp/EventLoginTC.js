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
    Welcome to our Event Planner platform. By signing up or using our service, you agree to adhere to the terms and conditions outlined below. 
    Please read them carefully before proceeding.
</p>
<p>
    <strong>1. Verification:</strong> By signing up, you agree to undergo a verification process conducted by our admin team. Only after successful verification will you be granted access to the platform.
</p>
<p>
    <strong>2. Personal Information:</strong> To use our platform for selling or listing items, you must provide your complete address and accurate personal information. This information is necessary to ensure transparency and compliance with our policies.
</p>
<p>
    <strong>3. Brokerage Policies:</strong> By using our platform, you acknowledge and agree to the brokerage policies outlined. This includes any fees, commissions, or charges applicable for transactions conducted through our platform. Please review these policies carefully before proceeding.
</p>
<p>
    If you have any questions or concerns about these terms, feel free to contact our support team for clarification.
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
