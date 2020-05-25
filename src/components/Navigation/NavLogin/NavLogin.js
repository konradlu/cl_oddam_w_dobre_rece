import React from 'react';
import {NavLink} from "react-router-dom";

import './NavLogin.scss';

export default function NavLogin() {

    return(
        <nav className="navLogin">
            <ul>
                <li>
                    <NavLink exact to="/login" className="navLoginLink">Zaloguj</NavLink>
                </li>
                <li>
                    <NavLink  exact to="/register" className="navLoginLink">Załóż konto</NavLink>
                </li>
            </ul>

        </nav>
    )
}