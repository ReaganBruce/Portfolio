import React from "react";
import { useQuery } from "react-query";
import { fetchProjects } from "../../services/base";

const Projects: React.FC<IProjects> = () => {

    const { data, isError, isLoading } = useQuery<IProjectBody>("projects", fetchProjects)

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
          {data?.projects.map((project: IProjectBody) => (
            <main>
                <h1>{project.projectName}</h1>
                    <h2>{project.projectDesc}</h2>
                    <h3>{project.createdAt}</h3>
            </main>
          ))}
        </>
    )
}




interface IProjects {
    createdAt?: string,
    learnedInfo?: string,
    projectDesc?: string,
    projectImg?: Buffer,
    projectName?: string,
    softwareStack?: [String],
    github?: string
}

//data structure is data.projects: [ { } ]
interface IProjectBody extends IProjects {
    projects: []
}

export default Projects
