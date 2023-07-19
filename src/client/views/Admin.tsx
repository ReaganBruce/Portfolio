import React, { useState } from "react";
import { Link } from "react-router-dom";

//Query Imports
import { useCreateProjectQuery } from "../services/projects/queries.projects";

//Status Components
import Modal from "../components/status/Modal";

//Form Components
import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import FileUpload from "../components/form/FIleUpload";
import Submit from "../components/form/Submit";

const Admin = (props: AdminProps) => {
  const [values, setValues] = useState<any>({});
  const [file, setFiles] = useState<File | null>(null);
  const [showModal, setShowModal] = useState(false);

  const { mutate: createNewProject } = useCreateProjectQuery();

  const handleChanges = (e: any) => {
    const { name, value, files } = e.target;

    //if there is a file, set it
    //else set the value 
    if (files && files.length > 0) {
      setFiles(files[0]);
    } else {
      setValues((prev: any) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  const handleClick = (e: any) => {
    const formData = new FormData();
    formData.append("projectFileUpload", file as any);

    //loop over object of values [key, value]
    //then append [key, value] to formdata object
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    createNewProject(formData);
    setShowModal(true);
  };

  return (
    <>
      <form>
        <Input
          value={values.projectName || ""}
          name="projectName"
          placeholder="projectname"
          change={handleChanges}
        >
          Project Name
        </Input>
        <Input
          value={values.github || ""}
          name="github"
          placeholder="github"
          change={handleChanges}
        >
          Project GitHub
        </Input>
        <Input
          value={values.softwareStack || ""}
          name="softwareStack"
          placeholder="stack"
          change={handleChanges}
        >
          Software Stack
        </Input>
        <TextArea
          value={values.projectDesc || ""}
          name="projectDesc"
          change={handleChanges}
        >
          Project Description
        </TextArea>
        <TextArea
          value={values.learnedInfo || ""}
          name="learnedInfo"
          change={handleChanges}
        >
          Learned Information
        </TextArea>
        <FileUpload name="projectImg" change={handleChanges}>
          Project Image Upload
        </FileUpload>
        <Submit click={handleClick}>Create Project</Submit>
      </form>
      <Modal
        children={`Project posted: ${values.projectName}`}
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


// softwareStack.forEach((stack: string) => {
//   formData.append("softwareStack", stack);
// });
