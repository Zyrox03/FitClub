import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData.js'
import tick from '../../assets/whiteTick.png'
import rightArrow from '../../assets/rightArrow.png'
export const Plans = () => {

    const planElements = plansData.map(plan => {
        return (
            <div key={plan.price} className="plan">
            <div className="blur blur-plan-1"></div>
            <div className="blur blur-plan-2"></div>

                {plan.icon}
                <span>{plan.name}</span>
                <span>${plan.price}</span>
                <ul>
                    {plan.features.map(feature => {
                        return (
                            <li key={feature}> <img src={tick} alt="" /> {feature}</li>
                        )
                    })}
                </ul>

                <span className='seeMore'>See more benefits <img src={rightArrow} alt="" /></span>

                <button className='btn'>Join Now</button>
            </div>
        )
    })
    return (
        <div className="Plans" id="Plans">

            <div className="Plans-header">
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            <div className="blur blur-plan-3"></div>

            <div className="planCards">
                {planElements}
            </div>

        </div>
    )
}
