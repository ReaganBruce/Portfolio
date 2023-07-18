import React, { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//View Imports
import Nav from "./Nav";
import ProjectDetails from "../views/ProjectDetails";
import Projects from "../views/Projects";
import About from "../views/About";
import Interests from "../views/Interests";
import Home from "../views/Home";
import Login from "../views/Login";

//Soon to be Private Routes
import Admin from "../views/Admin";

const AppRoutes = (props: AppRoutesProps): ReactElement => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>

          {/* General Routes */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="interests" element={<Interests />} />
          <Route path="about" element={<About />} />

          {/* Private Route */}
          <Route path="admin" element={<Admin />} />

          {/* Project Routes */}
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />



        </Routes>
      </Router>
    </>
  );
};

type AppRoutesProps = {}

export default AppRoutes;
