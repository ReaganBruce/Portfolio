import React from "react";

//AboutView Component Import
import Interests from './Interests'

const InterestsView: React.FC<IInterestsView> = () => {
    return (
        <>
            <Interests />
        </>
    )
}

interface IInterestsView { }

export default InterestsView;