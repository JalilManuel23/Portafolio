import React, { useEffect } from 'react'
import { Title } from '../../components/Title/Title'
import './about_me.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Aos from "aos";
import 'aos/dist/aos.css'

export const AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <section id='aboutme' className="about-me bg-1">
            <div className="about-me-content" data-aos="fade-up">
                <Title text="Sobre mí" />
                <div className="about-me-info container">
                    <div className="img-name">
                        <img src="img/jalil.png" alt="Jalil foto" className="jalil-foto" />
                        <p>Jalil López</p>
                        <div className="icons-img-name">
                            <a href="mailto:jalilmanuel25@gmail.com"><FontAwesomeIcon icon={ faEnvelope } /></a>
                            <a href="https://github.com/JalilManuel23" target="_blank"><FontAwesomeIcon icon={ faGithub } /></a>
                        </div>
                    </div>
                    <div className="info-ubi">
                        <p>
                            Soy Jalil López, tengo 20 años
                            estudio ingeniería de software,
                            en la Universidad Tecnológica
                            de Durango.
                        </p>
                        <div className="ubi">
                            <FontAwesomeIcon icon={ faMapMarker } />
                            <p>Durango, Dgo, Méx.</p>
                        </div>
                    </div>
                    <img src="img/trayectoria.png" alt="tayectoria" className="trayectoria" />
                </div>
            </div>
        </section>
    )
}
