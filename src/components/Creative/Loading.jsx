import React, { useEffect } from "react";
import Hero from "../Hero/Hero";

import "../../styles/loading/loading.css";
import $ from 'jquery';


const Loading = () => {

    useEffect(() => {
        setTimeout(() => {
            $("#hero-container").fadeIn(800);
        }, 1000);
    })

    return (
        <>
            <div id = "loading">
                <Hero />
            </div>
        </>
    )
}

export default Loading;