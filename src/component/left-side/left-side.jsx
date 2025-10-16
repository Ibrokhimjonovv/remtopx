import React from 'react'
import "./left-side.scss";

const LeftSide = () => {
    return (
        <div id='left-side'>
            <a href="https://afd-platform.uz" target='_blank'>
                <div className="white-list">
                    AFD Platform
                </div>
                <div className="black-list">
                    Do you like movies?
                </div>
                <div className="more-text">
                    Watch movies for free on our platform!
                </div>

                <div className="imgs">
                    <img src="https://afd-platform.uz/assets/pf-logo.png" alt="" />
                    <span>+</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="" />
                </div>
                <div className="black-name">
                    Interesting viewing
                </div>
            </a>
        </div>
    )
}

export default LeftSide