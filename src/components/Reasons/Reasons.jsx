import React from 'react'
import './Reasons.css'

import tick from '../../assets/tick.png'
import NB from '../../assets/nb.png'
import ADIDAS from '../../assets/nike.png'
import NIKE from '../../assets/adidas.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'

export const Reasons = () => {
    return (
        <div className="reasons" id='Reasons'>
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span className='reasonsTitle'>REASONS</span>

                <div className='whyChooseUs'>
                    <span className='stroke-text'>WHY</span>
                    <span>CHOOSE US?</span>
                </div>

                <ul className='reasonsList'>
                    <li>
                        <img src={tick} alt="" />
                        <span>OVER 140+ EXPERT COACHS</span>                    </li>
                    <li>
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </li>
                    <li>
                        <img src={tick} alt="" />
                        <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
                    </li>
                    <li>
                        <img src={tick} alt="" />
                        <span>RELIABLE PARTNERS</span>
                    </li>
                </ul>

                <span className='partners'>our partners</span>
                <div className="logos">
                    <img src={NB} alt="" />
                    <img src={ADIDAS} alt="" />
                    <img src={NIKE} alt="" />
                </div>

            </div>
        </div>
    )
}
