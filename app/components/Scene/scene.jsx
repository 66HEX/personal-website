'use client'

import {Canvas} from '@react-three/fiber'
import {OrthographicCamera, useAnimations } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

function CameraController() {
    const { camera } = useThree()
    useFrame(() => {
        camera.lookAt(0, 0, 0)
    })
    return null
}

export function Model(props) {
    const group = useRef()
    const { nodes, animations } = useGLTF('/models/cube_cascade.glb')
    const { actions, names } = useAnimations(animations, group)


    const matcapTexture = useLoader(THREE.TextureLoader, '/matcaps/matcap4.png')

    const matcapMaterial = new THREE.MeshMatcapMaterial({
        matcap: matcapTexture
    })

    useEffect(() => {
        if (names.length > 0) {
            const firstAnimation = actions[names[0]];
            if (firstAnimation) {
                firstAnimation.setEffectiveTimeScale(0.5);
                firstAnimation.play();
            }
        }
    }, [actions, names, animations]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={2} name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Cube_0">
                                <mesh name="Object_4" castShadow receiveShadow geometry={nodes.Object_4.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube001_1" scale={0.792}>
                                <mesh name="Object_6" castShadow receiveShadow geometry={nodes.Object_6.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube002_2" scale={0.629}>
                                <mesh name="Object_8" castShadow receiveShadow geometry={nodes.Object_8.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube003_3" scale={0.489}>
                                <mesh name="Object_10" castShadow receiveShadow geometry={nodes.Object_10.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube004_4" scale={0.374}>
                                <mesh name="Object_12" castShadow receiveShadow geometry={nodes.Object_12.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube005_5" scale={0.279}>
                                <mesh name="Object_14" castShadow receiveShadow geometry={nodes.Object_14.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube006_6" scale={0.204}>
                                <mesh name="Object_16" castShadow receiveShadow geometry={nodes.Object_16.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube007_7" scale={0.14}>
                                <mesh name="Object_18" castShadow receiveShadow geometry={nodes.Object_18.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube008_8" scale={0.086}>
                                <mesh name="Object_20" castShadow receiveShadow geometry={nodes.Object_20.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube009_9" scale={0.052}>
                                <mesh name="Object_22" castShadow receiveShadow geometry={nodes.Object_22.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Cube010_10" scale={0.027}>
                                <mesh name="Object_24" castShadow receiveShadow geometry={nodes.Object_24.geometry} material={matcapMaterial} />
                            </group>
                            <group name="Circle_11" scale={1.849} />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/cube_cascade.glb')

export default function Scene() {
    return (
        <div className="h-full w-full">
            <Canvas
                gl={{
                    antialias: true,
                    preserveDrawingBuffer: true
                }}
                shadows>
                <ambientLight intensity={0.5} />
                <directionalLight position={[-10, 10, -5]} intensity={1} castShadow />
                <directionalLight position={[10, 10, 10]} intensity={0.3} castShadow />

                <OrthographicCamera
                    makeDefault
                    position={[10, 10, 10]}
                    zoom={50}
                    near={-1000}
                    far={1000}
                />
                <CameraController />

                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}