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
            <div className="container">
                <div>
                    <h4>Sobre mi</h4>
                    <p>Desarrollador web. TSU en TI</p>
                    <div className='contacto-links'>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                </div>
                <img src="img/projects/brighit.png" alt="about me" srcset="img/projects/brighit.png" />
            </div>
        </section>
    )
}
