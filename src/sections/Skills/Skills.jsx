import React from 'react'
import { Title } from '../../components/Title/Title'
import { Skill } from './Skill/Skill'
import './skills.css'
import skills from './Skill/skillsData';
import { Carrousel } from '../../components/Carrousel/Carrousel';
import courses from './coursesData'

export const Skills = () => {
    return (
        <header className="bg-1">
            <div className="container skills">
                <Title text="Skills" />
                <div className="list-skills">
                    {
                        skills.map(({ title, image }) => {
                            return <Skill title={ title } image={ image } />
                        })
                    }
                </div>
                <Carrousel data = { courses } />
            </div>
        </header>
    )
}
