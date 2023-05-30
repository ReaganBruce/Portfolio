import React from "react";
import { Link } from "react-router-dom";

//Query Import
import { useProjectsQuery } from "../services/queries";

//Component Imports
import IsLoading from "./status/IsLoading";
import IsError from "./status/IsError";
import BufferImage from "./BufferImage";

const Projects: React.FC<IProjects> = () => {
  const {
    data: projectData,
    isError,
    isLoading,
  } = useProjectsQuery();

  if (isError) {
    return (
      <>
        <IsError />
      </>
    );
  }

  return (
    <>
      {isLoading ? (
        <>
          <IsLoading />
        </>
      ) : (
        <main className="card-compact h-screen justify-center w-full flex flex-row flex-wrap text-center">
          {projectData?.Projects.map((project) => (
            <div key={`project-id-${project._id}`}>
              <section className="col-4 p-3">
                <div className="card w-96 bg-base-100 shadow-xl p-6 ml-5">
                  <div className="card-body">
                    <h1 className="card-title justify-center">
                      {project.projectName}
                    </h1>
                    <p>{project.projectDesc}</p>
                    <BufferImage
                      imageSrc={project.projectImg.data as Uint8Array}
                    />
                    <Link
                      to={`/projects/${project._id}`}
                      className="card-actions justify-center"
                    >
                      <button className="btn btn-primary">Details</button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </main>
      )}
    </>
  );
};

interface IProjects {}

export default Projects;
