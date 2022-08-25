import React from 'react'
import './contact-info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactInfo = ({ icon, info, url }) => {
    return (
        <a href={ url } target='_blank' className='contact-info'>
            <FontAwesomeIcon icon={ icon } className='icon-contact'/>
            <p>{ info }</p>
        </a>
    )
}
