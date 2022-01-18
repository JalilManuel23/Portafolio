import React, { useRef, useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './header.css'
import { gsap } from "gsap";

export const Header = () => {
    
    const timeline = gsap.timeline();

    // wait until DOM has been rendered
    useEffect(() => {
        const animation = document.querySelectorAll('.animation');
        timeline.from( animation, { opacity: 0, x: 50, y: 40, duration: 1, stagger: 0.3 } )
    });

    return (
        <header className="bg-1">
            <div className="container">
                <Navbar /> 
                <div className="contain-header">
                    <div className="info-header">
                        <h1 className="tit-header animation">Desarrollador-Programador</h1>
                        <h2 className="name animation">Jalil López</h2>
                        <p className='animation'>TSU en Tecnologías de la Información</p>
                        <p className="btn animation">Ver proyectos</p>
                    </div>
                    <img className="img-programming animation" src='img/programming.svg' alt="programming" />
                </div>
            </div>
        </header>
    )
}
