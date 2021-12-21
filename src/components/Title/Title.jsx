import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import './title.css';

export const Title = ({ text }) => {
    return (
        <h4 className="title">
            <FontAwesomeIcon className='icono' icon={ faHandPointRight } />
            { text }
        </h4>
    )
}
