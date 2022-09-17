import React from "react";
import { useEffect } from "react";

import * as THREE from "three";
import "../../styles/creative/creative.css";

const Creative = () => {

    let scene, camera, renderer;

    let circle = new THREE.CircleGeometry(15, 40, 16);
    let torus = new THREE.TorusGeometry(10, 3, 16, 100);
    let capsule = new THREE.CapsuleGeometry(5, 10, 8);
    let cube = new THREE.BoxGeometry(1, 1, 1);

    let spriteProps = {
        count: 100,
        geometry: [circle, torus, capsule, cube],
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

        window.addEventListener("resize", () => {

            let w = window.innerWidth;
            let h = window.innerHeight;

            renderer.setSize(w, h);
            camera.aspect = w / h;

            camera.updateProjectionMatrix();
        })

        const populateScreen = () => {
            for (let i = 0; i < spriteProps.count; i++) {
                let randomMeshIndex = Math.floor(Math.random() * spriteProps.geometry.length);
                
                let meshGeo = spriteProps.geometry[randomMeshIndex];
                let meshMaterial = new THREE.MeshBasicMaterial({
                    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, 
                    side: THREE.DoubleSide
                });
                let mesh = new THREE.Mesh(meshGeo, meshMaterial);

                scene.add(mesh);

                scene.children[i].position.x = Math.floor(Math.random() * (spriteProps.xCoords.xMax - spriteProps.xCoords.xMin + 1) + spriteProps.xCoords.xMin);
                scene.children[i].position.y = Math.floor(Math.random() * (spriteProps.yCoords.yMax - spriteProps.yCoords.yMin + 1) + spriteProps.yCoords.yMin);
                scene.children[i].position.z = Math.floor(Math.random() * (spriteProps.zCoords.zMax - spriteProps.zCoords.zMin + 1) + spriteProps.zCoords.zMin);
            
                scene.children[i].rotation.x = Math.floor(Math.random() * (10 - 5) + 5);
                scene.children[i].rotation.y = Math.floor(Math.random() * (10 - 5) + 5);
                scene.children[i].rotation.z = Math.floor(Math.random() * (10 - 5) + 5);
            }
        }

        populateScreen();
        renderer.render(scene, camera);

    }

    const animate = () => {
        console.log("hit");

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