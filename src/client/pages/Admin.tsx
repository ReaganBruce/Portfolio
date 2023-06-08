import React, { useState } from "react";

//Query Imports
import { useCreateProjectQuery } from "../services/queries";

//Status Components
import Form from "../components/Form";
import IsPosted from "../components/status/isPosted";

const Admin = (props: AdminProps) => {
  const [projectName, setProjectName] = useState("");
  const [projectImg, setProjectImg] = useState<File | null>(null);
  const [projectDesc, setProjectDesc] = useState("");
  const [learnedInfo, setLearnedInfo] = useState("");
  const [softwareStack, setSoftwareStack] = useState([]);
  const [github, setGithub] = useState("");

  const [showModal, setShowModal] = useState(false);

  const { mutate: createNewProject } = useCreateProjectQuery();

  const handleSubmitProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (projectName == "" || projectDesc == "" || !projectImg) {
      e.preventDefault();
      throw new Error(
        "Hey, Reagan... you need to input data in all fields prior to posting"
      );
    }

    const formData = new FormData();
    formData.append("projectFileUpload", projectImg as File);
    formData.append("projectName", projectName);
    formData.append("projectDesc", projectDesc);
    createNewProject(formData as any);
    e.preventDefault();
    setShowModal(true);
  };

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleProjectImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectImg(e.target.files && e.target.files[0]);
  };

  const handleProjectDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProjectDesc(e.target.value);
  };

  return (
    <>
      <Form
        projectName={projectName}
        projectDesc={projectDesc}
        submitProjectName={handleProjectNameChange}
        submitProjectDesc={handleProjectDescChange}
        submitProjectImg={handleProjectImgChange}
        submitProject={handleSubmitProject}
      />
      <IsPosted projectName={projectName} showModal={showModal} />
    </>
  );
};

type AdminProps = {};

export default Admin;
