import React from "react";
import { useEffect, useState } from "react";

import * as THREE from "three";
import "../../styles/creative/creative.css";

const Creative = () => {

    const [deviceEventSwitch, setDeviceEventSwitch] = useState("");

    let scene, camera, renderer, mesh;
    let mouse = new THREE.Vector2(), touchPoint = new Object();

    let sphere = new THREE.SphereGeometry(15, 32, 16);
    let torus = new THREE.TorusGeometry(10, 3, 16, 100);
    let capsule = new THREE.CapsuleGeometry(5, 10, 8);
    let cube = new THREE.BoxGeometry(5, 5, 5);

    let spriteProps = {
        count: 70,
        geometry: [sphere, torus, capsule, cube],
        xCoords: {xMin: window.innerWidth - (window.innerWidth * 2), xMax: window.innerWidth - (window.innerWidth / 2)},
        yCoords: {yMin: window.innerHeight - (window.innerWidth * 2), yMax: window.innerHeight - (window.innerHeight / 2)},
        zCoords: {zMin: 0, zMax: 100},
    };

    const initGL = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 150);

        renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        document.getElementById("canvas-bg").appendChild(renderer.domElement);

        const populateScreen = () => {
            for (let i = 0; i < spriteProps.count; i++) {
                let randomMeshIndex = Math.floor(Math.random() * spriteProps.geometry.length);
                
                let meshGeo = spriteProps.geometry[randomMeshIndex];
                let meshMaterial = new THREE.MeshLambertMaterial({
                    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, 
                    side: THREE.DoubleSide,
                    wireframe: false
                });
                mesh = new THREE.Mesh(meshGeo, meshMaterial);

                scene.add(mesh);

                scene.children[i].position.x = Math.floor(Math.random() * (spriteProps.xCoords.xMax - spriteProps.xCoords.xMin + 1) + spriteProps.xCoords.xMin);
                scene.children[i].position.y = Math.floor(Math.random() * (spriteProps.yCoords.yMax - spriteProps.yCoords.yMin + 1) + spriteProps.yCoords.yMin);
                scene.children[i].position.z = Math.floor(Math.random() * (spriteProps.zCoords.zMax - spriteProps.zCoords.zMin + 1) + spriteProps.zCoords.zMin);
            
                scene.children[i].rotation.x = Math.floor(Math.random() * (10 - 5) + 5);
                scene.children[i].rotation.y = Math.floor(Math.random() * (10 - 5) + 5);
                scene.children[i].rotation.z = Math.floor(Math.random() * (10 - 5) + 5);
            }

            const light = new THREE.PointLight(0x404040, 5);
            light.position.set(0, 0, 100);
            scene.add(light);
        }

        populateScreen();

        const animate = () => {
            let objects = scene.children;

            for (let i = 0; i < objects.length; i++) {
                objects[i].rotation.x += 0.002;
                //check for mobile or desktop with deviceAgent
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        const setDeviceAgent = () => {
            let deviceW = window.innerWidth;
            setDeviceEventSwitch(deviceW < 600 ? "touch" : "mouse");
        }

        const onResizeWindow = () => {
            let w = window.innerWidth;
            let h = window.innerHeight;

            renderer.setSize(w, h);
            camera.aspect = w / h;

            camera.updateProjectionMatrix();
        }

        const onMouseMove = (e) => {
            e.preventDefault();

            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

            console.log(e.clientX, e.clientY);
        }

        //event listeners
        window.addEventListener("resize", onResizeWindow, false);
        window.addEventListener("mousemove", onMouseMove, false);

        setDeviceAgent();
        animate();
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