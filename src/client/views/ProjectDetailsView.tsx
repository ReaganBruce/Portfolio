import React from "react";

//ProjectDetails Component Import
import ProjectDetails from "../components/ProjectDetails";

const ProjectDetailsView: React.FC<IProject> = () => {
  return (
    <>
      <ProjectDetails />
    </>
  );
};

interface IProject {}

export default ProjectDetailsView;
