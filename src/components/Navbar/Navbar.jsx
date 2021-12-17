import React, { useState } from 'react'
import './navbar.css'

export const Navbar = () => {
    const [navClass, setNavClass] = useState( false );

    const toogle = () => { 
        setNavClass( !navClass )
    }

    return (
        <nav className="navbar">
            <div className="brand-title">
                Jalil López
            </div>
            <a href="#" className="toggle-button" onClick={ toogle }>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={ navClass ? "navbar-links active" : "navbar-links" }>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}
