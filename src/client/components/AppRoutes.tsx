import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//View Imports
import Nav from "./Nav";
import ProjectDetailsView from "../views/ProjectDetailsView";
import ProjectsView from "../views/ProjectsView";
import AboutView from "../views/AboutView";
import InterestsView from "../views/InterestsView";
import HomeView from "../views/HomeView";

//Soon to be Private Routes
import Admin from "./Admin";

const ClientRoutes: React.FC<IClientRoutes> = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/projects/:projectId" element={<ProjectDetailsView />}></Route>
          <Route path="/projects" element={<ProjectsView />}></Route>
          <Route path="/about" element={<AboutView />}></Route>
          <Route path="/interests" element={<InterestsView />}></Route>
          <Route path="/" element={<HomeView />}></Route>
          //Soon to be private
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </Router>
    </>
  );
};

interface IClientRoutes {}

export default ClientRoutes;
