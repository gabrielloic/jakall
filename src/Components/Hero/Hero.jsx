import React from 'react'
import './Hero.css'
import hero_image from '../Assets/voiture.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div>
                    <p>NEW CAR FOR EVERYONE <br /></p>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero