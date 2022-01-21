import React from 'react'
import './skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Skill = ({ title, icon }) => {
    return (
        <div className="skill">
            <FontAwesomeIcon icon={ icon } className='i'/>
            <p className="title-skill">{ title }</p>
            {/* <img src={ image } alt="image skill" /> */}
        </div>
    )
}
