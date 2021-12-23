import React from 'react'
import './project_card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

export const ProjectCard = () => {
    return (
        <div className="project-card">
            <div className="upper-border"></div>
            <div className="project-content">
                <img src="img/projects/brighit.png" alt="project" />
                <p className="project-title">Title</p>
                <p className="project-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                </p>
                <div className="project-icons">
                    <FontAwesomeIcon icon={ faJsSquare } />
                    <FontAwesomeIcon icon={ faReact } />
                </div>
            </div>
        </div>
    )
}
