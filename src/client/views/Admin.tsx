import React, { useState } from "react";

//Query Imports
import { useCreateProjectQuery } from "../services/queries";

//Status Components
import IsPosted from "../components/status/isPosted";

//Form Components
import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import FileUpload from "../components/form/FIleUpload";
import Submit from "../components/form/Submit";

const Admin = (props: AdminProps) => {
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectGithub, setProjectGithub] = useState("");
  const [projectImg, setProjectImg] = useState<File | null>(null);
  const [learnedInfo, setLearnedInfo] = useState("");
  const [softwareStack, setSoftwareStack] = useState([""]);

  const [showModal, setShowModal] = useState(false);

  const { mutate: createNewProject } = useCreateProjectQuery();

  const handleSubmitProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    const formData: FormData = new FormData();

    if (
      projectName === "" ||
      projectDesc === "" ||
      projectGithub === "" ||
      projectImg === null ||
      learnedInfo === ""
    ) {
      throw new Error("Please fill in all fields....Reagan");
    }

    formData.append("projectName", projectName);
    formData.append("projectDesc", projectDesc);
    formData.append("github", projectGithub);
    formData.append("projectFileUpload", projectImg);
    formData.append("learnedInfo", learnedInfo);
    createNewProject(formData);
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <form>
        <Input
          value={projectName}
          change={(e) => {
            setProjectName(e.target.value);
          }}
        >
          Project Name
        </Input>
        <FileUpload
          change={(e) => setProjectImg(e.target.files && e.target.files[0])}
        >
          Project Image Upload
        </FileUpload>
        <TextArea
          value={projectDesc}
          change={(e) => {
            setProjectDesc(e.target.value);
          }}
        >
          Project Description
        </TextArea>
        <TextArea
          value={learnedInfo}
          change={(e) => {
            setLearnedInfo(e.target.value);
          }}
        >
          Learned Information
        </TextArea>
        <Input
          value={projectGithub}
          change={(e) => {
            setProjectGithub(e.target.value);
          }}
        >
          Project GitHub
        </Input>
        <Submit click={handleSubmitProject}>Create Project</Submit>
      </form>
      <IsPosted projectName={projectName} showModal={showModal} />
    </>
  );
};

type AdminProps = {};

export default Admin;
