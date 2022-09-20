import React from "react";
import { IconContext } from "react-icons/lib";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
import {FaGithubSquare} from "react-icons/fa";

import Contact from "./Contact/Contact";
import "../../styles/Footer/footer.css";

const Footer = () => {
    
    return (
        <>
            <div id = "footer">
                <Contact />
                <div id = "footer-links">
                    <p> Here are some of my links that you can check out. </p>
                    <IconContext.Provider value={{color: "#d1c5ad", size: "2em", className: "social-icons"}}>
                        <ul>
                            <li><a href="https://www.instagram.com/adesignsm/"><BsInstagram /></a></li>
                            <li><a href="https://www.github.com/adesignsm/"><FaGithubSquare /></a></li>
                            <li><a href="https://www.linkedin.com/in/akash-mulye-1544b1182/"><BsLinkedin /></a></li>
                        </ul>
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

export default Footer;