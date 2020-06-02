import React from 'react';
import './Home.scss';
import { Route, Switch  } from 'react-router-dom';


import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import HomeHeader from './HomeHeader/HomeHeader';
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeFourSteps from "./HomeFourSteps/HomeFourSteps";
import HomeThreeCol from "./HomeThreeCol/HomeThreeCol";
import HomeWeHelp from "./HomeWeHelp/HomeWeHelp";
import User from "../User/User";
import Navigation from "../Navigation/Navigation";



export default function Home() {

    return(
        <>
            <Switch>
                <Route exact path="/">
                    <HomeHeader />
                    <HomeThreeCol />
                    <HomeFourSteps />
                    <HomeAbout />
                    <HomeWeHelp />
                    <Contact />
                    <Footer />
                </Route>

                <Route exact path="/login">
                    <Navigation />
                    <User />
                </Route>

                <Route exact path="/register">
                    <Navigation />
                    <User />
                </Route>

            </Switch>


        </>
    )

}