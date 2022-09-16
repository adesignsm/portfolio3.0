import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import * as THREE from "three";
import "../../styles/creative/creative.css";

const Creative = () => {

    const initGL = () => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x212121);
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("canvas-bg").appendChild(renderer.domElement);

        window.addEventListener("resize", () => {

            let w = window.innerWidth;
            let h = window.innerHeight;

            renderer.setSize(w, h);
            camera.aspect = w / h;

            camera.updateProjectionMatrix();
        })

        renderer.render(scene, camera);
    }

    const animate = () => {
        requestAnimationFrame(animate);
        initGL();
    }

    useEffect(() => {
        initGL();
    });

    return (
        <>
            <div id = "canvas-bg"></div>
        </>
    )

}

export default Creative;