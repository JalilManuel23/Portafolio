import React, { useState } from 'react'
import { Title } from '../../components/Title/Title'
import './projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ProjectCard } from './ProjectCard/ProjectCard'
import projects from  './projectsData.js';

export const Projects = () => {

    const [i, setI] = useState(1)

    const projectBack = () => { 

        if( i - 1  < 1 ) {
            
        }

        setI( i - 1 );
    }

    const projectNext = () => { 
        setI( i + 1 );
    }

    return (
        <section className="projects bg-1">
            <div className="container projects-container">
                <Title text="Proyectos" />
                <div className="projects-carrousel">
                    <FontAwesomeIcon icon={ faArrowCircleLeft } className='arrow' onClick={ () => projectBack() } />
                    {
                        projects.map( ( { id, name, description, image } ) => {       
                            if( id == i || id == ( i + 1 ) )
                                return <ProjectCard 
                                            name={ name }  
                                            description={ description }
                                            image={ image }
                                        />
                        })
                    }
                    <FontAwesomeIcon icon={ faArrowCircleRight } className='arrow' onClick={ () => projectNext() } />
                </div>
                <div className="github-projects">
                    <FontAwesomeIcon icon={ faGithub } className='arrow'  />
                    <p>@JalilManuel23</p>
                </div>
            </div>
        </section>
    )
}
