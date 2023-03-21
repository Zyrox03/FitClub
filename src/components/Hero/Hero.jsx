import React from 'react';
import './Hero.css';
import { Header } from '../Header/Header';

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

import { motion } from "framer-motion"

import NumberCounter from 'number-counter'


export default function Hero() {

    const transition = { type: 'spring', duration: 3 }


    return (
        <div className="Hero" id='Hero'>

            <div className="blur blur-hero"></div>
            <div className="left-h">
                <Header />
                {/* the-best-ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>The best fit club in the town</span>
                </div>
                {/* the-best-ad */}

                {/* hero_heading */}
                <div className="hero_text">
                    <div>
                        <span className='stroke-text'>SHAPE </span>
                        <span>YOUR</span>
                    </div>

                    <div>
                        <span>IDEAL BODY</span>
                    </div>

                    <div>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste inventore minima
                            magnam doloremque accusamus illo.
                        </span>
                    </div>
                </div>
                {/* figures */}

                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={140} start={100} delay='4' prefix={'+'} />
                        </span>
                        <span>Expert coach</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={450} start={350} delay='4' prefix={'+'} />

                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                    <NumberCounter end={50} start={25} delay='4' prefix={'+'}/>
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero button */}

                <div className="hero_btns">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div
                    initial={{ right: "10px" }}
                    whileInView={{ left: '100px' }}
                    transition={{ ...transition, duration: 2 }}

                    className="heart">
                    <img src={heart} alt="" />
                    <p>Heart Rate</p>
                    <span>116 BPM</span>
                </motion.div>

                {/* hero_img */}

                <div className='hero_img'>
                    <img src={hero_image} alt="" />
                </div>

                {/* hero_image_back */}

                <motion.div
                    initial={{ right: "10rem" }}
                    whileInView={{ right: '17rem' }}
                    transition={transition}


                    className="hero_image_back">
                    <img src={hero_image_back} alt="" />
                </motion.div>
                {/* calories */}

                <motion.div
                    initial={{ right: "10rem" }}
                    whileInView={{ right: '25rem' }}
                    transition={transition}

                    className="calories">
                    <div>
                        <img src={calories} alt="" />
                    </div>
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>

                </motion.div>


            </div>


        </div>


    )
}
