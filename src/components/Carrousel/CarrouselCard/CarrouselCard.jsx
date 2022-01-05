import React from 'react'
import './carrousel_card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'

export const CarrouselCard = ( { name, description, image, icons }) => {
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
                    {
                        ( icons ) && icons.map(( icon ) => {
                            console.log( icon );
                            return <FontAwesomeIcon icon={ icon } />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
