import React from 'react';
import './HomeHeader.scss'
import Navigation from "../../Navigation/Navigation";
import {NavLink} from "react-router-dom";


export default function HomeHeader() {

    return(
        <div className="homeHeader">
            <div className="homeHeaderContent">
                <Navigation/>

                <div className="homeHeaderTitle">
                    <h1>Zacznij pomagać!</h1>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                </div>
                <div className="homeHeaderBtns">
                    <NavLink exact to="/login" ><p>ODDAJ</p> <p>RZECZY</p></NavLink>
                    <NavLink exact to="/login" ><p>ZORGANIZUJ</p> <p>ZBIÓRKĘ</p></NavLink>
                </div>

            </div>



        </div>

    )

}