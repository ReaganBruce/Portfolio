import React from "react";
import { useProjectsQuery } from "../services/queries";

const Projects: React.FC<IProjects> = () => {
  const { data, isError, isLoading } = useProjectsQuery();

  if (isLoading) {
    return (
      <>
        <div className="flex h-screen justify-center items-center">
                <div className="text-7xl text-center">
                <progress className="progress w-56"></progress>
                </div>
           </div>
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

      <main className="card-compact w-full flex flex-row flex-wrap">
        {data?.Projects.map((project) => (
          <div key={`project-id-${project._id}`}>
            <section className="col-4 p-3">
              <div className="card w-96 bg-base-100 shadow-xl p-6 ml-5">
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
      </main>
    </>
  );
};

interface IProjects {}

export default Projects;
