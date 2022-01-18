import React, { useEffect } from 'react'
import { Title } from '../../components/Title/Title'
import { Skill } from './Skill/Skill'
import './skills.css'
import skills from './Skill/skillsData';
import { Carrousel } from '../../components/Carrousel/Carrousel';
import courses from './coursesData'

import Aos from "aos";
import 'aos/dist/aos.css'

export const Skills = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <header className="bg-1">
            <div className="container skills" data-aos="fade-up">
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
