import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Navigation.scss'


export default function Navigation() {

    return(
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink  exact to="/">Start</NavLink>
                </li>
                <li>
                    <Link to="homeFourSteps">O co chodzi?</Link>
                </li>
                <li>
                    <Link to="homeAbout">O nas</Link>
                </li>
                <li>
                    <Link to="homeWeHelp">Fundacja i organizacje</Link>
                </li>
                <li>
                    <Link to="contact">Kontakt</Link>
                </li>

            </ul>
        </nav>
    )
}