import React from "react";
import { Link } from "react-router-dom";
import { Buffer } from "buffer";

//Query Import
import { useProjectsQuery } from "../services/queries";

//Status Component Import
import IsLoading from "./status/IsLoading";
import IsError from "./status/IsError";

const Projects: React.FC<IProjects> = () => {
  const { data, isError, isLoading, isFetching } = useProjectsQuery();

  if (isLoading || isFetching) {
    return (
      <>
        <IsLoading />
      </>
    );
  }

  if (isError) {
    return (
      <>
        <IsError />
      </>
    );
  }

  return (
    <>
      <main className="card-compact h-screen justify-center w-full flex flex-row flex-wrap text-center">
        {data?.Projects.map((project) => (
          <div key={`project-id-${project._id}`}>
            <section className="col-4 p-3">
              <div className="card w-96 bg-base-100 shadow-xl p-6 ml-5">
                <div className="card-body">
                  <h1 className="card-title justify-center">
                    {project.projectName}
                  </h1>
                  <p>{project.projectDesc}</p>
                  <img src={`data:image/png;base64,${Buffer.from(new Uint8Array(project.projectImg)).toString("base64")}`}
        alt="Project Image"
      />
                  <Link
                    to={`/projects/${project._id}`}
                    className="card-actions justify-end"
                  >
                    <button className="btn btn-primary">Details</button>
                  </Link>
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
