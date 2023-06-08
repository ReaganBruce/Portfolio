import React, { useState } from "react";

//Query Imports
import { useCreateProjectQuery } from "../services/queries";

//Status Components
import Form from "../components/Form";
import IsPosted from "../components/status/isPosted";

const Admin = (props: AdminProps) => {
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectGithub, setProjectGithub] = useState("");
  const [projectImg, setProjectImg] = useState<File | null>(null);
  const [learnedInfo, setLearnedInfo] = useState("");
  const [softwareStack, setSoftwareStack] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const { mutate: createNewProject } = useCreateProjectQuery();

  const handleSubmitProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (projectName == "" || projectGithub == "" || projectDesc == "" || !projectImg) {
      e.preventDefault();
      throw new Error(
        "Hey, Reagan... you need to input data in all fields prior to posting"
      );
    }

    const formData: FormData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectDesc", projectDesc);
    formData.append("github", projectGithub);
    formData.append("projectFileUpload", projectImg);
    createNewProject(formData);
    e.preventDefault();
    setShowModal(true);
  };

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleProjectDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProjectDesc(e.target.value);
  };

  const handleProjectGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectGithub(e.target.value);
  }

  const handleProjectImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectImg(e.target.files && e.target.files[0]);
  };


  return (
    <>
      <Form
        projectName={projectName}
        projectDesc={projectDesc}
        projectGithub={projectGithub}
        submitProjectName={handleProjectNameChange}
        submitProjectDesc={handleProjectDescChange}
        submitProjectGithub={handleProjectGithubChange}
        submitProjectImg={handleProjectImgChange}
        submitProject={handleSubmitProject}
      />
      <IsPosted projectName={projectName} showModal={showModal} />
    </>
  );
};

type AdminProps = {};

export default Admin;
