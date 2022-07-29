import React, { useRef, useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import './header.css';
import { gsap } from "gsap";
import TypeAnimation from 'react-type-animation';

export const Header = () => {
    
    const timeline = gsap.timeline();

    // wait until DOM has been rendered
    useEffect(() => {
        const animation = document.querySelectorAll('.name');
        timeline.from( animation, { opacity: 0, x: 80, y: 40, duration: 1, stagger: 0.3 } )
    });

    return (
        <header className="header h-vh-100">
            <Navbar />
            <div className='name d-flex flex-column justify-content-end align-items-center pt-5'>
                <h1 className='title2'>Jalil López.</h1>
                <h4>Web Developer</h4>
            </div>
            <div className='scroll-container d-flex flex-column justify-content-end align-items-center'>
                <p className='p-0 m-0'>SCROLL</p>
                <img src="img/scrolldown.png" alt="scrolldown" className='scrolldown' />
            </div>
        </header>
    )
}