import React from 'react';
import {NavLink} from "react-router-dom";

import './User.scss';


export default function User(props) {

    return(
        <div className="user">
            <div className="userFormTitle">
                {props.formType === "login" ? <h1>Zaloguj się</h1> : <h1>Załóż konto</h1>}
            </div>
            <div className="userForm">
                <form>
                    <p>email</p>
                    <p>hasło</p>
                    {props.formType === "register" ? <p>Powtórz hasło</p> :""}
                </form>

            </div>
            <div className="userBtns">
                { props.formType === "login"
                    ? <div><NavLink exact to="/register" >Załóż konto</NavLink></div>
                    : <div><NavLink exact to="/login" >Zaloguj</NavLink></div>
                 }
                { props.formType === "login"
                    ? <div><button>Zaloguj się</button></div>
                    : <div><button>Załóż konto</button></div>
                }

            </div>
        </div>
    )
}