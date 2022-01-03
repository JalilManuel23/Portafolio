import React from 'react'
import './contact-info.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactInfo = ({ icon, info }) => {
    return (
        <div className='contact-info'>
            <FontAwesomeIcon icon={ icon } className='icon-contact'/>
            <p>{ info }</p>
        </div>
    )
}
