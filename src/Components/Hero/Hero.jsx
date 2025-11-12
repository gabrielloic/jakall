import React, { useEffect, useState } from 'react'
import './Hero.css'
import car1 from '../Assets/voiture.jpg'
import car2 from '../Assets/voiture2.jpg'
import car3 from '../Assets/voiture3.jpg'

const Hero = () => {
    const slides = [
        { text: "NEW CAR FOR EVERYONE", image: car1 },
        { text: "DRIVE YOUR DREAM", image: car2 },
        { text: "EXPERIENCE SPEED", image: car3 },
    ];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentText = slides[index].text;
        const speed = deleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!deleting && subIndex < currentText.length) {
                setSubIndex(prev => prev + 1);
            } else if (deleting && subIndex > 0) {
                setSubIndex(prev => prev - 1);
            } else if (!deleting && subIndex === currentText.length) {
                setTimeout(() => setDeleting(true), 1000);
            } else if (deleting && subIndex === 0) {
                setDeleting(false);
                setIndex((prev) => (prev + 1) % slides.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index, slides]);

    return (
        <div className='hero'>
            <div className="hero-left">
                <div className="typewriter">
                    <p>{slides[index].text.substring(0, subIndex)}</p>
                </div>
            </div>
            <div className="hero-right fade">
                <img src={slides[index].image} alt="Voiture" key={slides[index].image} />
            </div>
        </div>
    )
}

export default Hero