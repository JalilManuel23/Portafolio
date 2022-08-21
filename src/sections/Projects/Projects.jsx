import React, { useEffect } from 'react'
import { Title } from '../../components/Title/Title'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import projects from  './projectsData.js';
import { Carrousel } from '../../components/Carrousel/Carrousel'

import Aos from "aos";
import 'aos/dist/aos.css'

export const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <section id='proyectos' className="projects skewed">
            <div className="container projects-container" data-aos="fade-up">
                <Title text="Projects and experience" />
                <div className="projects">
                    
                </div>
                <a href="https://github.com/JalilManuel23" target="_blank" className="github-projects">
                    <FontAwesomeIcon icon={ faGithub } className='arrow'  />
                    <p>@JalilManuel23</p>
                </a>
            </div>
        </section>
    )
}
