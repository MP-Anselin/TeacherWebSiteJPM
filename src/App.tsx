import React, {useEffect, useState} from 'react';

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import {Services} from "./components/service/Services";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

function App() {
    const [landingPageData, setLandingPageData] = useState(JsonData);
    /*useEffect(() => {
        setLandingPageData(JsonData);
    }, []);*/

    return (
        <div className="App">
            <Navigation/>
            <Header data={landingPageData.Header}/>
            <About data={landingPageData.About}/>
            <Services/>
            <Footer/>
        </div>
    );
}

export default App;
