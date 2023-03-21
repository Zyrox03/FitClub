import React from 'react'
import './Programs.css'

import { programsData } from '../../data/programsData.js'
import RightArrow from '../../assets/rightArrow.png'

export const Programs = () => {

    const categories = programsData.map(program => {
        return (
            <div key={program.heading} className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div>
                    <span className='join-now'>Join Now </span>
                    <img src={RightArrow} alt="" />
                </div>
            </div>
        )
    })
    return (
        <div className='Programs' id='Programs'>
            {/* header  */}

            <div className="programs-header">
                <span className='stroke-text'>Explore Our</span>
                <span>Programs</span>
                <span className='stroke-text'>To Shape You</span>
            </div>

            <div className="categories">
                {categories}
            </div>


        </div>

    )
}
