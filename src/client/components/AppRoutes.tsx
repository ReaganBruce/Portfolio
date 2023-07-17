import React, { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//View Imports
import Nav from "./Nav";
import ProjectDetailsView from "../views/ProjectDetailsView";
import ProjectsView from "../views/ProjectsView";
import AboutView from "../views/AboutView";
import InterestsView from "../views/InterestsView";
import HomeView from "../views/HomeView";
import Login from "../views/LoginView";

//Soon to be Private Routes
import Admin from "../views/AdminView";

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
          <Route path="/login" element={<Login />}></Route>
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
