import React from 'react'
import "./TopNavBarStyle.scss"

export default function TopNavBar() {
    return (
        <div className="top-nav-bar">
            <div className="top-nav-bar__image-container">
                {/* The image used differs from the given image as it did not match the background color */}
                <img src="https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg" alt=""/>
            </div>
        </div>
    )
}
