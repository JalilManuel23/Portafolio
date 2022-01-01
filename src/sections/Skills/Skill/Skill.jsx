import React from 'react'
import './skill.css'

export const Skill = ({ title, image }) => {
    return (
        <div className="skill">
            <p className="title-skill">{ title }</p>
            <img src={ image } alt="image skill" />
        </div>
    )
}
