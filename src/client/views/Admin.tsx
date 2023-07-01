import React, { useState } from "react";
import { Link } from "react-router-dom";

//Query Imports
import { useCreateProjectQuery } from "../services/queries";

//Status Components
import Modal from "../components/status/Modal";

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
  const [softwareStack, setSoftwareStack] = useState<Array<String>>([]);

  const [showModal, setShowModal] = useState(false);

  const { mutate: createNewProject } = useCreateProjectQuery();

  const handleSubmitProject = (e: React.MouseEvent<HTMLButtonElement>) => {
    const formData: FormData = new FormData();

    if (
      projectName === "" ||
      projectDesc === "" ||
      projectGithub === "" ||
      projectImg === null ||
      learnedInfo === "" ||
      softwareStack === null
    ) {
      throw new Error("Please fill in all fields....");
    }

    formData.append("projectName", projectName);
    formData.append("projectDesc", projectDesc);
    formData.append("github", projectGithub);
    formData.append("projectFileUpload", projectImg);
    formData.append("learnedInfo", learnedInfo);
    softwareStack.forEach((stack: any) => {
      formData.append("softwareStack", stack);
      console.log(stack);
    });
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
        <Input
          value={softwareStack.join(",")}
          change={(e) => {
            const inputValues = e.target.value.split(",");
            setSoftwareStack(inputValues);
          }}
        >
          Software Stack
        </Input>
        <Submit click={handleSubmitProject}>Create Project</Submit>
      </form>
      <Modal
        children={`Project posted: ${projectName}`}
        showModal={showModal}
        link={
          <Link to={`/projects`} className="card-actions justify-center mt-7">
            <button className="btn btn-primary">View</button>
          </Link>
        }
      />
    </>
  );
};

type AdminProps = {};

export default Admin;