import React from "react";

//Query Import
import { useProjectsQuery, } from "../services/queries";

//Component Imports
import IsLoading from "../components/status/IsLoading";
import IsError from "../components/status/IsError";
import Card from "../components/Card";

const Projects: React.FC<IProjects> = () => {
  const { data: projectData, isError, isLoading } = useProjectsQuery();

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError />;
  }

  return (
    <>
       <Card projectData={projectData?.Projects as any} /> */I know his is not good LOL/*
    </>
  );
};

interface IProjects {}

export default Projects;
