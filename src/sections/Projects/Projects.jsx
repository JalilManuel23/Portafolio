import React from 'react'
import { Title } from '../../components/Title/Title'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import projects from  './projectsData.js';
import { Carrousel } from '../../components/Carrousel/Carrousel'

export const Projects = () => {
    return (
        <section className="projects bg-1">
            <div className="container projects-container">
                <Title text="Proyectos" />
                <Carrousel data = { projects } />
                <div className="github-projects">
                    <FontAwesomeIcon icon={ faGithub } className='arrow'  />
                    <p>@JalilManuel23</p>
                </div>
            </div>
        </section>
    )
}
