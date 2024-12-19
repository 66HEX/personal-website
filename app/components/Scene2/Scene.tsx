"use client";
import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";

function Sizes() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
        width,
        height,
        aspect: width / height,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        frustrum: 4.5
    };
}

function Cube({ position }: { position: [number, number, number] }) {
    return (
        <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4} position={position}>
            <meshPhysicalMaterial
                color="#000"
                emissive="#000"
                roughness={0}
                metalness={1}
                iridescence={0}
            />
        </RoundedBox>
    );
}

function RubiksCube() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
            groupRef.current.rotation.x += 0.001;
            groupRef.current.rotation.z += 0.001;
        }
    });

    const offset = (3 - 1) / 2;
    const positions: [number, number, number][] = [];

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
        for (let colIdx = 0; colIdx < 9; colIdx++) {
            const x = (colIdx % 3) * 1.1 - offset;
            const y = Math.floor(colIdx / 3) * 1.1 - offset;
            const z = rowIdx * 1.1 - 1;
            positions.push([x, y, z]);
        }
    }

    return (
        <group ref={groupRef}>
            {positions.map((pos, idx) => (
                <Cube key={idx} position={pos} />
            ))}
        </group>
    );
}

function Scene() {
    const { scene, camera, gl } = useThree();

    useEffect(() => {
        const sizes = Sizes();
        scene.background = new THREE.Color(0x000000);
        if (camera instanceof THREE.PerspectiveCamera) {
            camera.aspect = sizes.aspect;
            camera.updateProjectionMatrix();
        }
        gl.setSize(sizes.width, sizes.height);
        gl.setPixelRatio(sizes.pixelRatio);

        RectAreaLightUniformsLib.init();

        const rightLight = new THREE.RectAreaLight("#fff", 5, 4, 3);
        rightLight.position.set(-5, 5, 0);
        rightLight.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(rightLight);

        const centerLight = new THREE.RectAreaLight("#fff", 5, 4, 3);
        centerLight.position.set(0, 0, 5.21);
        centerLight.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(centerLight);

        const rectLight3 = new THREE.RectAreaLight("#fff", 5, 1.84, 8);
        rectLight3.position.set(-2, 4, 0);
        rectLight3.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(rectLight3);

        const frontLight = new THREE.RectAreaLight("#fff", 5, 1.84, 8.89);
        frontLight.position.set(-4, 0, -3);
        frontLight.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(frontLight);
    }, [scene, camera, gl]);

    return (
        <>
            <RubiksCube />
            <ambientLight intensity={0.5} />
        </>
    );
}

export default function ThreeScene() {
    return (
        <Canvas style={{ width: "100%", height: "100vh" }}>
            <Scene />
        </Canvas>
    );
}