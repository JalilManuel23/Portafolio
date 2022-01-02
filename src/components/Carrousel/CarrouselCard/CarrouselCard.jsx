import React from 'react'
import './carrousel_card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

export const CarrouselCard = ( { name, description, image }) => {
    return (
        <div className="carrousel-card">
            <div className="upper-border"></div>
            <div className="carrousel-content">
                <img src={ image } alt="carrousel" />
                <p className="carrousel-title">{ name }</p>
                <p className="carrousel-description">
                    { description }
                </p>
                <div className="carrousel-icons">
                    <FontAwesomeIcon icon={ faJsSquare } />
                    <FontAwesomeIcon icon={ faReact } />
                </div>
            </div>
        </div>
    )
}
