import React from "react";

//Home Component Import
import Home from '../components/Home/Home'

const HomeView: React.FC<IHomeView> = () => {
    return (
        <>
            <Home />
        </>
    )
}

interface IHomeView { }

export default HomeView;