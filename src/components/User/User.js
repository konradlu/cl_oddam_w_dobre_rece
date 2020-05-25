import React from 'react';
import {NavLink} from "react-router-dom";

import './User.scss';


export default function User(props) {

    return(
        <div className="user">
            <div className="userFormTitle">
                {props.formType === "login" ? "Zaloguj się" : "Załóż konto"}
            </div>
            <div className="userForm">
                <form>
                    email
                    hasło
                    {props.formType === "register" ? "Powtórz hasło" :""}
                </form>

            </div>
            <div className="userBtns">
                { props.formType === "login"
                    ? <NavLink exact to="/register" className="navLoginLink">Załóż konto</NavLink>
                    : <NavLink exact to="/login" className="navLoginLink">Zaloguj</NavLink>
                 }
                { props.formType === "login"
                    ? <button>Zaloguj się</button>
                    : <button>Załóż konto</button>
                }

            </div>
        </div>
    )
}