import React, { useState } from 'react'
import './Testimonials.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

import { testimonialsData } from '../../data/testimonialsData.js'

import { motion } from "framer-motion"


export const Testimonials = () => {


    const [selected, setSelected] = useState(0)


    const transition = { type: 'spring', duration: 3 }

    return (
        <div className="Testimonials" id="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>WHAT THEY</span>
                <span>SAY ABOUT US</span>


                <span>
                    <div className='author'>
                        <motion.p
                            key={selected}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={transition}
                            exit={{ opacity: 0, x: 100 }}
                        >{testimonialsData[selected].review}</motion.p>
                        <span>{testimonialsData[selected].name} </span><span> - {testimonialsData[selected].status}</span>
                    </div>
                </span>
            </div>
            <div className="right-t">
                <motion.img

                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={transition}
                    exit={{ opacity: 0, x: -100 }}

                    className='author_img' src={testimonialsData[selected].image} alt="" />
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    className='justBorder'></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    className='filled'></motion.div>
                <span className='arrows'>
                    <img onClick={() => {
                        selected === 0
                            ? setSelected(testimonialsData.length - 1)
                            : setSelected(prev => prev - 1)
                    }} src={leftArrow} alt="" />

                    <img onClick={() => {
                        selected === testimonialsData.length - 1
                            ? setSelected(0)
                            : setSelected(prev => prev + 1)
                    }} src={rightArrow} alt="" />
                </span>
            </div>
        </div>
    )
}
