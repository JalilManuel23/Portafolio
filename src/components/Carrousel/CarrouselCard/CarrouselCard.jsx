import React from 'react'
import './carrousel_card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CarrouselCard = ( { name, description, image, icons, enlace }) => {
    return (
        <div className="carrousel-card">
            <div className="upper-border"></div>
            <div className="carrousel-content">
                <img src={ image } alt="carrousel" />
                <p className="carrousel-title">{ name }</p>
                <p className="carrousel-description">
                    { description }
                </p>
                { ( enlace ) && <a href={ enlace } className='btn btn-visit' target="_blank">Visitar</a> }
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
