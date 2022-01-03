import React from 'react'
import './contact.css'
import { Title } from '../../components/Title/Title'
import contactInfo from './contactInfoData'
import { ContactInfo } from './ContactInfo/ContactInfo'

export const Contact = () => {
    return (
        <div className='bg-1'>
            <div className="container contact">
                <Title text="Contacto" />
                <div className="list-contactInfo">
                    {
                        contactInfo.map(( { id, icon, info } ) => {
                            return <ContactInfo icon={ icon } info={ info } key={ id } />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
