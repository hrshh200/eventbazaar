import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <div className='containerHome'>
            <img
                className='imageDisplay'    
                src='Background.jpeg'
            />
            <div className='overlayImage'>
                <img src='S2.png'/>
            </div>
            <div className="overlay">
                <span className='dreamMaker'>Dream maker</span>
                <span className='titleMaker'>YOUR PERSONAL DREAM MAKER!</span>
                <span className='paraMaker'>We believe that it is all about the BIG DREAMS and the small details!</span>
                <button className='buttonDisplay'>Book Now!</button>
            </div>
            <div className='overlayImage2'>
               <span>Search Event by name</span>
            </div>
            {/* <div className='services'>
                <h1>OUR SERVICES</h1>
            </div> */}
        </div>
    )
}

export default Home;
