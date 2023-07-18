import React, { ReactElement, useState } from "react";
import { useParams, Link, useNavigate, Outlet } from "react-router-dom";

//Query Import
import {
  useProjectDetailsQuery,
  useRemoveProjectQuery,
} from "../services/projects/queries.projects";

//Component Imports
import Loading from "../components/status/Loading";
import Alert from "../components/status/Alert";
import Modal from "../components/status/Modal";
import Hero from "../components/details/Hero";
import List from "../components/details/List";
import Text from "../components/details/Text";

const ProjectDetails = (props: ProjectDetailsProps): ReactElement => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isError, isLoading } = useProjectDetailsQuery(id);

  const { mutate: removeProjectBody } = useRemoveProjectQuery();

  const handleDelete = (projectId?: string) => {
    removeProjectBody(projectId as string);
    setShowModal(true);
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Alert children={error.message} color="alert alert-error" />;
  }

  return (
    <>
      <main key={`project-key-${data?.details._id}`}>
        <Hero image={data?.details.projectImg}>
          {data?.details.projectName}
        </Hero>
        <Text data={data?.details.projectDesc}>
          About {data?.details.projectName}
        </Text>
        <Modal
          children={`Project Deleted: ${data?.details.projectName}`}
          showModal={showModal}
        />

        <List stack={data?.details.softwareStack}>Software Stack</List>
        <Link to={`/projects/`} className="card-actions justify-center">
              <button className="btn btn-primary">Go Back</button>
            </Link>
            <button
              className="btn btn-secondary"
              onClick={() => handleDelete(data?.details._id)}
            >
              Delete
            </button> 
      </main>
    </>
  );
};

type ProjectDetailsProps = {};

export default ProjectDetails;

{/* <Link to={`/projects/`} className="card-actions justify-center">
              <button className="btn btn-primary">Go Back</button>
            </Link>

<a className="link link-success" href={data?.details.github}>
Github
</a> */}


