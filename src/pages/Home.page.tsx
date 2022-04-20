import React, {useEffect, useState} from "react";
import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";
import About from "../components/about/About";
import {Services} from "../components/service/Services";
import {Contact} from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import JsonData from "../data/data.json";
import {Gallery} from "../components/gallery/Gallery";
import {Features} from "../components/features/features";

const HomePage: React.FC = () => {
    const [landingPageData, setLandingPageData] = useState(JsonData);
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <>
            <Navigation/>
            <Header data={landingPageData.Header}/>
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About}/>
            <Services/>
            <Gallery data={landingPageData.Gallery}/>
            <Contact data={landingPageData.Contact}/>
            <Footer/>
        </>
    )
}

export {HomePage};
