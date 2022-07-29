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
                <a href="#"><span>&#8832;</span> Jalil López <span>&#8827;</span></a>
            </div>
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
