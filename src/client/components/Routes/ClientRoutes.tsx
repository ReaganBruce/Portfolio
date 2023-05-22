import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//View Imports
import ProjectDetailsView from "../../views/ProjectDetailsView";
import ProjectsView from "../../views/ProjectsView";
import AboutView from "../../views/AboutView";
import InterestsView from "../../views/InterestsView";
import HomeView from "../../views/HomeView";


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
