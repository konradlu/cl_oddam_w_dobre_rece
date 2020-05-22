import React from 'react';
import './Home.scss'

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import HomeHeader from './HomeHeader/HomeHeader';
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeFourSteps from "./HomeFourSteps/HomeFourSteps";
import HomeThreeCol from "./HomeThreeCol/HomeThreeCol";
import HomeWeHelp from "./HomeWeHelp/HomeWeHelp";

//import { Route, Switch  } from 'react-router-dom';

export default function Home() {

    return(
        <>
            <HomeHeader />
            <HomeThreeCol/>
            <HomeFourSteps/>
            <HomeAbout />
            <HomeWeHelp/>
            <Contact/>
            <Footer />
        </>
    )

}