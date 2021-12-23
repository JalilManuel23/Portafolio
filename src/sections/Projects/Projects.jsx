import React from 'react'
import { Title } from '../../components/Title/Title'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { ProjectCard } from './ProjectCard/ProjectCard'

export const Projects = () => {
    return (
        <section className="projects bg-1">
            <div className="container projects-container">
                <Title text="Proyectos" />
                <div className="projects-carrousel">
                    <FontAwesomeIcon icon={ faArrowCircleLeft } className='arrow' />
                    <ProjectCard />
                    <ProjectCard />
                    <FontAwesomeIcon icon={ faArrowCircleRight } className='arrow'  />
                </div>
            </div>
        </section>
    )
}
