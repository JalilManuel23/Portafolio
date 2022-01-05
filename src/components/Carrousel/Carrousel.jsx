import React, { useState } from 'react'
import './carrousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { CarrouselCard } from './CarrouselCard/CarrouselCard'

export const Carrousel = ({ data }) => {
    const [i, setI] = useState(1)

    const projectBack = () => { 
        setI( i - 1 );
    }

    const projectNext = () => { 
        setI( i + 1 );
    }

    return (
        <div className="projects-carrousel">
                    {
                        ( i - 1 >= 1) ? <FontAwesomeIcon icon={ faArrowCircleLeft } className='arrow' onClick={ () => projectBack() } /> : null
                    }
                    {
                    
                        data.map( ( { id, name, description, image, icons } ) => {       
                            if( id == i || id == ( i + 1 ) )
                                return <CarrouselCard 
                                            name={ name }  
                                            description={ description }
                                            image={ image }
                                            icons={ icons }
                                        />
                        })
                    }
                    {
                        ( i + 2 <= data.length) ? <FontAwesomeIcon icon={ faArrowCircleRight } className='arrow' onClick={ () => projectNext() } /> : null
                    }
                </div>
    )
}
