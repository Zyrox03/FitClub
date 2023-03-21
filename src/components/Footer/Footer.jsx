import React from 'react'
import './Footer.css'

import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'


export const Footer = () => {
  return (
    <div className="footer" id="footer">
            <div className="blur blur-footer"></div>
            <div className="blur blur-footer-2"></div>

        <div className="line_f"></div>

        <div className="socials">
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
        </div>
        <img className='logo_f' src={logo} alt="" />

    </div>
  )
}
