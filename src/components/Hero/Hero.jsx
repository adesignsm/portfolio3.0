import React from "react";
import $ from "jquery";
import "../../styles/hero/Hero.css";
import { useEffect } from "react";

const Hero = () => {

    useEffect(() => {
        setTimeout(() => {
            $("#hero-title").delay(200).fadeIn(500);
            $("#hero-description").delay(1200).fadeIn(400);
        }, 1000);
    })

    return (
        <>
            <div id = "hero">
                <div id = "hero-container">
                    <h1 id = "hero-title"> Akash Mulye </h1>
                    <h2 id = "hero-description"> Engineering creative, and interactive web apps for all types of businesses. </h2>
                </div>
            </div>
        </>
    )
}

export default Hero;