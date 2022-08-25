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
        <section id='aboutme' className="about-me">
            <div className="container about-me__container">
                <Title text="About Me" />
                <div className="about-me__content">
                    <div>
                        <p>I'm Jalil López, I've been coding since 5 year ago, I love self-taught and learning new things, you can see my profesional profile <a href="https://www.linkedin.com/in/jalil-m-l%C3%B3pez-9483a1230/" target='_blank'>here</a>.</p>
                        <div className='contacto-links'>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                            <a href=""></a>
                        </div>
                    </div>
                    <img src="img/icon.webp" alt="about me" className='about-me__img' />
                </div>
            </div>
        </section>
    )
}
