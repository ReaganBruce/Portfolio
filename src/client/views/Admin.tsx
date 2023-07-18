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
  const [values, setValues] = useState<any>({})
  const [files, setFiles] = useState<File | null>(null)
  const [showModal, setShowModal] = useState(false);

  const { mutate: createNewProject } = useCreateProjectQuery();

  const handleChanges = (e: any) => {
    setValues((prev: any) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })

    setFiles((prev: any) => {
      return {
        ...prev,
        [e.target.image]: e.target.files
      }
    })
  }


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createNewProject(values && files as any);
    console.log(values)
    setShowModal(true);
  };

  //https://stackoverflow.com/questions/41453224/uploading-a-file-with-reactjs-and-dealing-with-c-fakepath-file
  return (
    <>
      <form>
        <Input
          value={values.projectName || ''}
          name="projectName"
          placeholder="projectname"
          change={handleChanges}
        >
          Project Name
        </Input>
        <FileUpload
          name="projectImg"
          change={handleChanges}
        >
          Project Image Upload
        </FileUpload>
        <TextArea
          value={values.projectDesc || ''}
          name="projectDesc"
          change={handleChanges}
        >
          Project Description
        </TextArea>
        <TextArea
          value={values.learnedInfo || ''}
          name="learnedInfo"
          change={handleChanges}
        >
          Learned Information
        </TextArea>
        <Input
          value={values.github || ''}
          name="github"
          placeholder="github"
          change={handleChanges}
        >
          Project GitHub
        </Input>
        <Input
          value={values.softwareStack || ''}
          name="softwareStack"
          placeholder="stack"
          change={handleChanges}
        >
          Software Stack
        </Input>
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



//const formData: FormData = new FormData();

 // const [projectName, setProjectName] = useState("");
  // const [projectDesc, setProjectDesc] = useState("");
  // const [projectGithub, setProjectGithub] = useState("");
  // const [projectImg, setProjectImg] = useState<File | null>(null);
  // const [learnedInfo, setLearnedInfo] = useState("");
  // const [softwareStack, setSoftwareStack] = useState<Array<string>>([]);


      // if (
    //   projectName === "" ||
    //   projectDesc === "" ||
    //   projectGithub === "" ||
    //   projectImg === null ||
    //   learnedInfo === "" ||
    //   softwareStack === null
    // ) {
    //   throw new Error("Please fill in all fields....");
    // }

    // formData.append("projectName", projectName);
    // formData.append("projectDesc", projectDesc);
    // formData.append("github", projectGithub);
    // formData.append("projectFileUpload", projectImg);
    // formData.append("learnedInfo", learnedInfo);
    // softwareStack.forEach((stack: string) => {
    //   formData.append("softwareStack", stack);
    // });