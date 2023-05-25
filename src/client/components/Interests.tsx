import React from "react";

const Interests: React.FC<IInterests> = () => {
    return (
        <>
           <div className="flex h-screen justify-center items-center">
                <h1 className="text-7xl text-center">INTERESTS</h1>
           </div>
        </>
    )
}

interface IInterests { }


export default Interests;