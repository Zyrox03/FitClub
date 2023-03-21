import React, { useState, useEffect } from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'
import bars from '../../assets/bars.png'

import { Link } from 'react-scroll'
export const Header = () => {


    const [menu, setMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    useEffect(() => {
        if (windowWidth >= 600) {
            setMenu(true)
        }
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
            if (windowWidth >= 600) {
                setMenu(true)
            }

        })

    }, [])

    function handleMenuClick() {

        setMenu(prevMenu => {
            return prevMenu = !prevMenu
        })
    }

    return (
        <div className='header'>
            <img className='logo' src={Logo} alt="" />
            <img onClick={handleMenuClick} className='bars' src={bars} alt="" />
            {menu && <ul>
                <li >
                    <Link
                    onClick={() => setMenu(false)}
                    to={'Hero'}
                    spy={true}
                    smooth={true}
                    >Home
                    </Link>
                </li>
                <li onClick={() => setMenu(false)}>
                     <Link
                    onClick={() => setMenu(false)}
                    to={'Programs'}
                    spy={true}
                    smooth={true}
                    >Programs
                    </Link>
                </li>
                <li onClick={() => setMenu(false)}>
                     <Link
                    onClick={() => setMenu(false)}
                    to={'Reasons'}
                    spy={true}
                    smooth={true}
                    >Reasons
                    </Link>
                </li>
                <li onClick={() => setMenu(false)}>
                     <Link
                    onClick={() => setMenu(false)}
                    to={'Plans'}
                    spy={true}
                    smooth={true}
                    >Plans
                    </Link>
                </li>
                <li onClick={() => setMenu(false)}>
                     <Link
                    onClick={() => setMenu(false)}
                    to={'Testimonials'}
                    spy={true}
                    smooth={true}
                    >Testimonials
                    </Link>
                </li>
            </ul>}
        </div>
    )
}
