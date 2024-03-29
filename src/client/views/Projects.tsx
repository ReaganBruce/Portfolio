import React, { ReactElement } from "react";

//Query Import
import { useProjectsQuery } from "../services/projects/queries.projects";

//Component Imports
import Loading from "../components/status/Loading";
import Card from "../components/Card";
import Alert from "../components/status/Alert";
import { Outlet } from "react-router-dom";

const Projects = (props: ProjectsProps): ReactElement => {
  const { data, error, isError, isLoading } = useProjectsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Alert children={error.message} color="alert alert-error" />;
  }

  return (
    <>
      {(data?.projects?.length as number) <= 0 ? (
        <Alert children="No projects found." color="alert alert-info" />
      ) : (
        <Card projectData={data?.projects} />
      )}
    </>
  );
};

type ProjectsProps = {};

export default Projects;
