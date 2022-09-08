import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Project = () => {

    const [repoData, setRepoData] = useState([]);

    const getRepos = () => {
        axios.get("https://api.github.com/").then((res) => {
            setRepoData(res);
            console.log(repoData);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getRepos();
    }, []);

    return (
        <>
            <h1> Project Name </h1> 
        </>
    )
}

export default Project;