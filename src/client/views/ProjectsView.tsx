import React from "react";

//Projects Component Import
import Projects from "../components/Projects";

const ProjectsView: React.FC<IProjectsView> = () => {
  return (
    <>
      <Projects />
    </>
  );
};

interface IProjectsView {}

export default ProjectsView;
