import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

//Query Import
import {
  useProjectDetailsQuery,
  useRemoveProjectQuery,
} from "../services/queries";

//Component Imports
import IsLoading from "./status/IsLoading";
import IsError from "./status/IsError";
import BufferImage from "./BufferImage";

const ProjectDetails: React.FC<IProjectDetails> = () => {
  const { projectId } = useParams();
  const {
    data: projectDetails,
    isError,
    isLoading,
  } = useProjectDetailsQuery(projectId as string);

  const { mutate: removeProjectBody } = useRemoveProjectQuery(
    projectId as string
  );

  removeProjectBody;

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
        <main key={projectDetails?.Project._id}>
          <div className="card-compact w-96 bg-base-100 shadow-xl p-6 ml-5 mt-5">
            <div className="card-body">
              <h1 className="card-title justify-center">
                {projectDetails?.Project.projectName}
              </h1>
              <BufferImage
                imageSrc={projectDetails?.Project.projectImg.data as Uint8Array}
              />
              <Link to={`/projects/`} className="card-actions justify-center">
                <button className="btn btn-primary">Go Back</button>
              </Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

interface IProjectDetails {}

export default ProjectDetails;
