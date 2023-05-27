import React from "react";
import { useParams } from "react-router-dom";

//Query Import
import { useProjectDetailsQuery } from "../services/queries";

// Status Component Imports
import IsLoading from "./status/IsLoading";
import IsError from "./status/IsError";

const ProjectDetails: React.FC<IProjectDetails> = () => {
  const { projectId } = useParams();
  const { isLoading, data, isError, isFetching } = useProjectDetailsQuery(projectId as string);

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
      <main key={data?.Project._id}>
        <div className="card-compact w-96 bg-base-100 shadow-xl p-6 ml-5 mt-5">
          <div className="card-body">
            <h1 className="card-title justify-center">
              {data?.Project.projectName}
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

interface IProjectDetails { }

export default ProjectDetails;
