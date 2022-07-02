import React, { useState, useEffect } from 'react'
import './navbar.css'

export const Navbar = () => {
    const [navClass, setNavClass] = useState( false );


    const changeClass=()=>{
        const scrollValue=document.documentElement.scrollTop;
        if(scrollValue>100)
        {
            setNavClass( true );
        }
        else{
            setNavClass( false );
        }
    }

    window.addEventListener('scroll', changeClass);

    return (
        <nav className={ navClass ? "navbar active" : "navbar" } >
            <div className="brand-title">
                <span>&#8832;</span> Jalil López <span>&#8827;</span> 
            </div>
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
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
