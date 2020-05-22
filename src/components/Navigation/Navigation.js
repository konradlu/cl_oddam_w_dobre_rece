import React from 'react';
import './Navigation.scss';

import NavMenu from "./NavMenu/NavMenu";
import NavLogin from "./NavLogin/NavLogin";

export default function Navigation () {

    return(
        <div className="navigation">
            <NavLogin/>
            <NavMenu />
        </div>
    )
}