import React from "react";

//Query Import
import { useProjectsQuery } from "../services/queries";

//Component Imports
import IsLoading from "../components/status/IsLoading";
import IsError from "../components/status/IsError";
import IsEmpty from "../components/status/IsEmpty";
import Card from "../components/Card";

const Projects: React.FC<IProjects> = () => {
  const { data: projectData, isError, isLoading, isIdle } = useProjectsQuery();

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError />;
  }

  //any is bad, I know. this will be fixed :)
  return (
    <>
      {(projectData?.Projects?.length as any) <= 0 ? (
        <IsEmpty />
      ) : (
        <Card projectData={projectData?.Projects as any} />
      )}
    </>
  );
};

interface IProjects {}

export default Projects;
