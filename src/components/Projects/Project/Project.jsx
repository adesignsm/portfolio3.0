import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import projects from "../../../projects.json";

import "../../../styles/projects/projects.css";

const Project = () => {

    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        if (projectData.length < 1) {
            setProjectData(projects);
        }
    }, [projectData]);

    return (
        <>
            <div id = "projects__inner">
                {Object.keys(projectData).map((data, key) => {
                    return(
                        <div key = {key}>
                            <h1> {projectData[data].name} </h1>
                            <p> {projectData[data].description}</p>
                            <p> {projectData[data].date} </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Project;