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
                            <h1> 
                                <a href = {projectData[data].link}>
                                    {projectData[data].name}
                                </a> 
                            </h1>
                            <h4 className="date"> {projectData[data].date} </h4>
                            <p> {projectData[data].role} </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Project;