import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import projects from "../../../projects.json";

const Project = () => {

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        if (projectData.length < 1) {
            setProjectData(projects);
        }
    }, [projectData]);

    return (
        <>
            {Object.keys(projectData).map((data, key) => {
                return(
                    <div key = {key}>
                        <h1> {projectData[data].name} </h1>
                        <p> {projectData[data].description}</p>
                        {/* images data */}
                        {/* dates of completion data */}
                    </div>
                )
            })}
        </>
    )
}

export default Project;