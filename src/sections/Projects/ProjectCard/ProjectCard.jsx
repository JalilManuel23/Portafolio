import React from 'react'
import './project_card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

export const ProjectCard = ( { name, description, image }) => {
    return (
        <div className="project-card">
            <div className="upper-border"></div>
            <div className="project-content">
                <img src={ image } alt="project" />
                <p className="project-title">{ name }</p>
                <p className="project-description">
                    { description }
                </p>
                <div className="project-icons">
                    <FontAwesomeIcon icon={ faJsSquare } />
                    <FontAwesomeIcon icon={ faReact } />
                </div>
            </div>
        </div>
    )
}
