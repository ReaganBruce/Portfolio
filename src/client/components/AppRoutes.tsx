import React, { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//View Imports
import Nav from "./Nav";
import ProjectDetailsView from "../pages/ProjectDetailsView";
import ProjectsView from "../pages/ProjectsView";
import AboutView from "../pages/AboutView";
import InterestsView from "../pages/InterestsView";
import HomeView from "../pages/HomeView";

//Soon to be Private Routes
import Admin from "./Admin";

const ClientRoutes = (props: ClientRouteProps): ReactElement => {
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

type ClientRouteProps = {}

export default ClientRoutes;
