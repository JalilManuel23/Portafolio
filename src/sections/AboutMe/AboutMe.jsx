import React from 'react'
import { Title } from '../../components/Title/Title'
import './about_me.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const AboutMe = () => {
    return (
        <section className="about-me bg-1">
            <div className="about-me-content">
                <Title text="Sobre mí" />
                <div className="about-me-info container">
                    <div className="img-name">
                        <img src="img/jalil.png" alt="Jalil foto" className="jalil-foto" />
                        <p>Jalil López</p>
                        <div className="icons-img-name">
                            <FontAwesomeIcon icon={ faEnvelope } />
                            <FontAwesomeIcon icon={ faGithub } />
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
