'use client'

import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import RubiksCubeModel from "@/app/components/Scene/Cube/cube";

function CameraController() {
    const { camera } = useThree()
    useFrame(() => {
        camera.lookAt(0, 0, 0)
    })
    return null
}

export default function Scene() {
    return (
        <div className="h-full w-full relative">
            <Canvas
                gl={{
                    antialias: true,
                    preserveDrawingBuffer: true,
                    powerPreference: 'high-performance',
                    alpha: true,
                    toneMapping: 3,
                    toneMappingExposure: 1.5
                }}>

                <Environment files="/environments/studio_small_09_1k.hdr" intensity={1} />

                <ambientLight intensity={2} />
                <directionalLight position={[-10, 5, -5]} intensity={8} />
                <directionalLight position={[10, 5, -5]} intensity={8} />
                <pointLight position={[5, 5, 5]} intensity={15} />
                <pointLight position={[-5, -5, 5]} intensity={15} />

                <PerspectiveCamera
                    makeDefault
                    fov={50}
                    position={[0, 0, 7]}
                    near={0.1}
                    far={1000}
                />

                <CameraController/>

                <Suspense fallback={null}>
                    <RubiksCubeModel position={[0, 0, 0]} scale={1} />
                </Suspense>
            </Canvas>
        </div>
    )
}