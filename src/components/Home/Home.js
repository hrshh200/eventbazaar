import React from 'react';
import "./Home.css";

const Home = () => {

    
    return (
        <div className='containerHome'>
            <div>
                <img
                    className='imageDisplay'
                    src='Marriage.jpg'
                />
                <div className='overlayTitle'>
                    <div className='overlayAdjust'>
                        <span>Wedding Planning</span>
                        <h1>Inspiring ideas, elegant service, and expert wedding coordination</h1>
                        <button>View our work!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
