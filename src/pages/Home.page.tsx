import React, {useEffect, useState} from "react";
import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";
import About from "../components/about/About";
import {Services} from "../components/service/Services";
import {Contact} from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import JsonData from "../data/data.json";

const HomePage: React.FC = () => {
    const [landingPageData, setLandingPageData] = useState(JsonData);
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <>
            <Navigation/>
            <Header data={landingPageData.Header}/>
            <About data={landingPageData.About}/>
            <Services/>
            <Contact data={landingPageData.Contact}/>
            <Footer/>
        </>
    )
}

export {HomePage};
