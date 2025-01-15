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
                <PerspectiveCamera
                    makeDefault
                    fov={40}
                    position={[0, 0, 10]}
                    near={0.1}
                    far={1000}
                />

                <CameraController />

                <Suspense fallback={null}>
                    <Environment preset={"apartment"}/>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    )
}