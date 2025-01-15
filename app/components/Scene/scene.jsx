'use client'

import {Canvas} from '@react-three/fiber'
import {Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import {Model} from "@/app/components/Scene/Model/model";

function CameraController() {
    const { camera } = useThree()
    useFrame(() => {
        camera.lookAt(0, 0, 0)
    })
    return null
}

export default function Scene() {
    return (
        <div className="h-full w-full">
            <Canvas
                gl={{
                    antialias: true,
                    preserveDrawingBuffer: true
                }}
                shadows>

                <ambientLight intensity={0.5}/>
                <directionalLight position={[-10, 10, -5]} intensity={1} castShadow/>
                <directionalLight position={[10, 10, 10]} intensity={0.3} castShadow/>

                <PerspectiveCamera
                    makeDefault
                    fov={130}
                    position={[0, 0, 2.5]}
                    near={0.1}
                    far={1000}
                />

                <CameraController/>

                <Suspense fallback={null}>
                    <Environment preset={"apartment"}/>
                    <Model/>
                </Suspense>
            </Canvas>
        </div>
    )
}