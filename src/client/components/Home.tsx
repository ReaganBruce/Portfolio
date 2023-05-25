import React from "react";

const Home: React.FC<IHome> = () => {
    return (
        <>
            <div className="flex h-screen justify-center items-center">
                <h1 className="text-7xl text-center">HOME</h1>
           </div>
        </>
    )
}

interface IHome { }

export default Home;