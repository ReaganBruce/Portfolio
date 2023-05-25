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
        <div key={`project-id-${project._id}`}>
          <section className="col-4 mb-4 p-3">
              <div className="card-compact w-96 bg-base-100 shadow-xl p-6 ml-5 mt-5">
                <div className="card-body">
                  <h1 className="card-title justify-center">
                    {project.projectName}
                  </h1>
                  <p>{project.projectDesc}</p>
                </div>
              </div>
          </section>
        </div>
      ))}
    </>
  );
};

interface IProjects {}

export default Projects;
