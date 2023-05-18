import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//View Imports
import HomeView from "./components/Home/HomeView"
// import ProjectDetailsView from './components/ProjectDetails/ProjectDetailsView';
import ProjectsView from "./components/Projects/ProjectsView";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/projects" element={<ProjectsView />}></Route>
          <Route path="/projects/:id" element={<ProjectDetails />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
