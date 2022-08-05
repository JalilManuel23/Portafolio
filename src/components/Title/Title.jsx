import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import './title.css';

export const Title = ({ text }) => {
    return (
        <div className="title">
            <h4>
                { text }
            </h4>
        </div>
    )
}
