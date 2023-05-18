import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails: React.FC<IProjectDetails> = () => {
    const { id } = useParams();

    return (
        <>
            <h1>HELLO FROM PROJECT BY {id}</h1>
        </>
    )
}

interface IProjectDetails { }

export default ProjectDetails;