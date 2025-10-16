import React from 'react';
import "./right-side.scss";
import img from "./image.png"

const RightSide = () => {
    return (
        <div id='right-side'>
            <a href="https://my-device-size.vercel.app" target='_blank'>
                <div className="top-text">
                    What's my screen size???
                </div>
                <img src={img} alt="" />
                <div className="hero-text">
                    Do you want to know your screen size?
                </div>
                <div className="small-text">
                    On this site you can easily find out the size of your site in: px, em, rem and cm!!!
                </div>
                <div className="black-name">
                    Let's goooo!!!
                </div>
            </a>
        </div>
    )
}

export default RightSide