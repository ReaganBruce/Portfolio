import React from "react";
import { useProjectsQuery } from "../../services/queries";

const Projects: React.FC<IProjects> = () => {
  const { data, isError, isLoading } = useProjectsQuery();

  if (isLoading) {
    return (
      <>
        <p>Loading.....</p>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <p>Error fetching projects</p>
      </>
    );
  }

  return (
    <>
      {data?.Projects.map((project) => (
          <div key={project._id}>
            <h1>{project.createdAt}</h1>
          </div>
      ))}
    </>
  );
};

interface IProjects {}

export default Projects;
