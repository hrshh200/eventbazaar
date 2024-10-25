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
                <img src='S2.png' />
            </div>
            <div className="overlay">
                <span className='dreamMaker'>Dream maker</span>
                <span className='titleMaker'>YOUR PERSONAL DREAM MAKER!</span>
                <span className='paraMaker'>We believe that it is all about the BIG DREAMS and the small details!</span>
                <button className='buttonDisplay'>Book Now!</button>
            </div>
            {/* <div className='overlayImage2'>
                <span>Search Event by name</span>
            </div> */}
            {/* <div className='services'>
                <h1>OUR SERVICES</h1>
            </div> */}
            <div className='Services'>
                <span>Events and Planners</span>
                <h1>OUR SERVICES</h1>
                <div className="imageService">
                    <div className="imageContainer">
                        <img className="Serviceimg" src="Service1.jpeg" />
                        <div className="overlays">
                            <h2>Marriage Events</h2>
                            <p>Description for Service 1</p>
                            <button>See More!</button>
                        </div>
                    </div>

                    <div className="imageContainer">
                        <img className="Serviceimg" src="Service2.jpeg" />
                        <div className="overlays">
                            <h2>Birthday Events</h2>
                            <p>Description for Service 2</p>
                            <button>See More!</button>
                        </div>
                    </div>

                    <div className="imageContainer">
                        <img className="Serviceimg" src="Servcie3.jpeg" />
                        <div className="overlays">
                            <h2>Anniversary Events</h2> 
                            <p>Description for Service 3</p>
                            <button>See Now!</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='items'>
                <img
                    className='itemsimg'
                    src='S1.png'
                />
                <img
                    className='itemsimg'
                    src='S2.png'
                />
                <img
                    className='itemsimg'
                    src='S5.png'
                />
                <img
                    className='itemsimg'
                    src='S3.png'
                />
                <img
                    className='itemsimg'
                    src='S4.png'
                />
            </div>
        </div>
    )
}

export default Home;
