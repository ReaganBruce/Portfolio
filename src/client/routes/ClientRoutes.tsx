import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//View Imports
import ProjectDetailsView from "../components/ProjectDetails/ProjectDetailsView";
import ProjectsView from "../components/Projects/ProjectsView";
import AboutView from "../components/About/AboutView";
import InterestsView from "../components/Interests/InterestsView";
import HomeView from "../components/Home/HomeView";


const ClientRoutes: React.FC<IClientRoutes> = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/projects/:id" element={<ProjectDetailsView />}></Route>
          <Route path="/projects" element={<ProjectsView />}></Route>
          <Route path="/about" element={<AboutView />}></Route>
          <Route path="/interests" element={<InterestsView />}></Route>
          <Route path="/" element={<HomeView />}></Route>
        </Routes>
      </Router>
    </>
  );
};

interface IClientRoutes {}

export default ClientRoutes;
