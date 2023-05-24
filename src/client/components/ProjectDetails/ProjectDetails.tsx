import React from "react";
import { useParams } from "react-router-dom";

//Query Import
import { useProjectDetailsQuery } from "../../services/queries";

const ProjectDetails: React.FC<IProjectDetails> = () => {
    const { projectId } = useParams();
    const { isLoading, data, isError } = useProjectDetailsQuery(projectId)


    if (isLoading) {
        return (
            <>
                <p>Loading.....</p>
            </>
        )
    }

    if (isError) {
        return (
            <>
                <p>Error fetching projects</p>
            </>
        )
    }

    return (
        <>
            <div key={data?.Project?._id}>
                <h1>{data?.Project?.projectName}</h1>
                <h2>{data?.Project?.createdAt}</h2>
            </div>
        </>
    )
}

interface IProjectDetails { }


export default ProjectDetails;