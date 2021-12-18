import React, { useRef, useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './header.css'
import { gsap } from "gsap";

export const Header = () => {
    const boxRef = useRef();

    // wait until DOM has been rendered
    // useEffect(() => {
    //     gsap.to(boxRef.current, { rotation: "+=360" });
    // });

    return (
        <header className="bg-1">
            <div className="container">
                <Navbar /> 
                <div className="contain-header">
                    <div className="info-header">
                        <h1 className="tit-header">Desarrollador-Programador</h1>
                        <h2 className="name">Jalil López</h2>
                        <p>TSU en Tecnologías de la Información</p>
                        <p className="btn">Ver proyectos</p>
                    </div>
                    <img ref={boxRef} className="img-programming" src='img/programming.svg' alt="programming" />
                </div>
            </div>
        </header>
    )
}
