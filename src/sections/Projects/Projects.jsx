import React from 'react'
import { Title } from '../../components/Title/Title'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ProjectCard } from './ProjectCard/ProjectCard'
import projects from  './projectsData.js';

export const Projects = () => {
    return (
        <section className="projects bg-1">
            <div className="container projects-container">
                <Title text="Proyectos" />
                <div className="projects-carrousel">
                    <FontAwesomeIcon icon={ faArrowCircleLeft } className='arrow' />
                    {
                        projects.map( ( { name, description, image } ) => {
                            return <ProjectCard 
                                        name={ name }  
                                        description={ description }
                                        image={ image }
                                    />
                        })
                    }
                    <FontAwesomeIcon icon={ faArrowCircleRight } className='arrow'  />
                </div>
                <div className="github-projects">
                    <FontAwesomeIcon icon={ faGithub } className='arrow'  />
                    <p>@JalilManuel23</p>
                </div>
            </div>
        </section>
    )
}
