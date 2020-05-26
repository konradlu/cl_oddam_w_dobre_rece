import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './NavMenu.scss'


export default function NavMenu() {

    return(
        <nav className="navMenu">
            <ul>
                <li>
                    <NavLink  exact to="/">Start</NavLink>
                </li>
                <li>
                    <Link to="homeFourSteps" spy={true} smooth={true} duration={500}>O co chodzi?</Link>
                </li>
                <li>
                    <Link to="homeAbout" spy={true} smooth={true} duration={500}>O nas</Link>
                </li>
                <li>
                    <Link to="homeWeHelp" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} duration={500}>Kontakt</Link>
                </li>

            </ul>
        </nav>
    )
}