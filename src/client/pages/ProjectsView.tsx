import React, { ReactElement } from "react";

//Query Import
import { useProjectsQuery } from "../services/queries";

//Component Imports
import IsLoading from "../components/status/IsLoading";
import IsError from "../components/status/IsError";
import IsEmpty from "../components/status/IsEmpty";
import Card from "../components/Card";

const Projects = (props: ProjectsProps): ReactElement => {
  const { data, error, isError, isLoading } = useProjectsQuery();

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError message={error.message} />
  }

  return (
    <>
      {(data?.projects?.length as number) <= 0 ? (
        <IsEmpty />
      ) : (
        <Card projectData={data?.projects} />
      )}
    </>
  );
};

type ProjectsProps = {};

export default Projects;
