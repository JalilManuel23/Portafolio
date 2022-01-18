import React, { useState, useEffect } from 'react'
import './navbar.css'
import { gsap } from "gsap";

export const Navbar = () => {
    const [navClass, setNavClass] = useState( false );

    const toogle = () => { 
        setNavClass( !navClass )
    }

    const timeline = gsap.timeline();

    // wait until DOM has been rendered
    useEffect(() => {
        const animation = document.querySelectorAll('.navbar');
        timeline.from( animation, { opacity: 0, x: 50, y: 40, duration: 1, stagger: 0.3 } )
    });

    return (
        <nav className="navbar">
            <div className="brand-title">
                <span>&#8832;</span> Jalil López <span>&#8827;</span> 
            </div>
            <a href="#" className="toggle-button" onClick={ toogle }>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={ navClass ? "navbar-links active" : "navbar-links" }>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#aboutme">Sobre mi</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}
