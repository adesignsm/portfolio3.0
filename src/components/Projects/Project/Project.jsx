import React from "react";
import { Octokit } from "octokit";
import { useEffect } from "react";
import { useState } from "react";

const Project = () => {

    const [repoData, setRepoData] = useState([]);

    const getRepos = async () => {
        const octokit = new Octokit({
            auth: process.env.REACT_APP_SECRET
        });

        try {
            const data = await octokit.request("GET /users/{username}/repos", {
                username: "adesignsm",
            });

            setRepoData(data);
            console.log(repoData);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRepos();
    }, [repoData]);

    return (
        <>
            <h1> Project Name </h1> 
        </>
    )
}

export default Project;