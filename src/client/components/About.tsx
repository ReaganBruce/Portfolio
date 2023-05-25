import React from "react";

const About: React.FC<IAbout> = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center">
                <h1 className="text-7xl text-center">ABOUT</h1>
           </div>
        </>
    )
}

interface IAbout { }


export default About;