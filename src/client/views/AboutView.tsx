import React from "react";

//AboutView Component Import
import About from '../components/About/About'

const AboutView: React.FC<IAboutView> = () => {
    return (
        <>
            <About />
        </>
    )
}

interface IAboutView { }

export default AboutView;