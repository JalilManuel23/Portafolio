import React, { useEffect } from 'react'
import './contact.css'
import { Title } from '../../components/Title/Title'
import contactInfo from './contactInfoData'
import { ContactInfo } from './ContactInfo/ContactInfo'

import Aos from "aos";
import 'aos/dist/aos.css'

export const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, []);

    return (
        <div id='contact' className='bg-1'>
            <div className="container contact" data-aos="fade-up">
                <Title text="Contact me" />
                <div className="list-contactInfo">
                    {
                        contactInfo.map(( { id, icon, info, url } ) => {
                            return <ContactInfo icon={ icon } info={ info } key={ id } url = { url } />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
