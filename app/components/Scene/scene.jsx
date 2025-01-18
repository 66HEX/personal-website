'use client'

import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
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

                <ambientLight intensity={2}/>

                <directionalLight
                    position={[0, 0, 5]}
                    intensity={10}
                    castShadow
                />

                <directionalLight position={[-10, 10, -5]} intensity={0.5} castShadow/>
                <directionalLight position={[10, 10, 10]} intensity={0.5} castShadow/>

                <PerspectiveCamera
                    makeDefault
                    fov={70}
                    position={[0, 0, 5]}
                    near={0.1}
                    far={1000}
                />

                <CameraController/>

                <Suspense fallback={null}>
                    <Model/>
                </Suspense>

            </Canvas>
        </div>
    )
}