'use client'


import { useAnimations} from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import {  useRef, useEffect } from 'react'
import {useLoader} from "@react-three/fiber";
import * as THREE from 'three'

export function Model(props) {
    const group = useRef()
    const { nodes, animations } = useGLTF('/models/metal_gear_solid.glb')
    const { actions, names } = useAnimations(animations, group)

    const matcapTexture = useLoader(THREE.TextureLoader, '/matcaps/matcap.png')

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
        <group scale={0.6} ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[Math.PI / 1, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Cube_0" position={[4, 0, 0]}>
                                <mesh
                                    name="Object_4"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_4.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube001_2" position={[3.939, 0, -0.695]}>
                                <mesh
                                    name="Object_6"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_6.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube002_4" position={[3.759, 0, -1.368]}>
                                <mesh
                                    name="Object_8"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_8.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube003_6" position={[3.464, 0, -2]}>
                                <mesh
                                    name="Object_10"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_10.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube004_8" position={[3.064, 0, -2.571]}>
                                <mesh
                                    name="Object_12"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_12.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube005_10" position={[2.571, 0, -3.064]}>
                                <mesh
                                    name="Object_14"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_14.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube006_12" position={[2, 0, -3.464]}>
                                <mesh
                                    name="Object_16"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_16.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube007_14" position={[1.368, 0, -3.759]}>
                                <mesh
                                    name="Object_18"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_18.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube008_16" position={[0.695, 0, -3.939]}>
                                <mesh
                                    name="Object_20"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_20.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube009_18" position={[0, 0, -4]}>
                                <mesh
                                    name="Object_22"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_22.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube010_20" position={[-0.695, 0, -3.939]}>
                                <mesh
                                    name="Object_24"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_24.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube011_22" position={[-1.368, 0, -3.759]}>
                                <mesh
                                    name="Object_26"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_26.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube012_24" position={[-2, 0, -3.464]}>
                                <mesh
                                    name="Object_28"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_28.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube013_26" position={[-2.571, 0, -3.064]}>
                                <mesh
                                    name="Object_30"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_30.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube014_28" position={[-3.064, 0, -2.571]}>
                                <mesh
                                    name="Object_32"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_32.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube015_30" position={[-3.464, 0, -2]}>
                                <mesh
                                    name="Object_34"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_34.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube016_32" position={[-3.759, 0, -1.368]}>
                                <mesh
                                    name="Object_36"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_36.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube017_34" position={[-3.939, 0, -0.695]}>
                                <mesh
                                    name="Object_38"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_38.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube018_36" position={[-4, 0, 0]}>
                                <mesh
                                    name="Object_40"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_40.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube019_38" position={[-3.939, 0, 0.695]}>
                                <mesh
                                    name="Object_42"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_42.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube020_40" position={[-3.759, 0, 1.368]}>
                                <mesh
                                    name="Object_44"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_44.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube021_42" position={[-3.464, 0, 2]}>
                                <mesh
                                    name="Object_46"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_46.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube022_44" position={[-3.064, 0, 2.571]}>
                                <mesh
                                    name="Object_48"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_48.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube023_46" position={[-2.571, 0, 3.064]}>
                                <mesh
                                    name="Object_50"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_50.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube024_48" position={[-2, 0, 3.464]}>
                                <mesh
                                    name="Object_52"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_52.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube025_50" position={[-1.368, 0, 3.759]}>
                                <mesh
                                    name="Object_54"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_54.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube026_52" position={[-0.695, 0, 3.939]}>
                                <mesh
                                    name="Object_56"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_56.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube027_54" position={[0, 0, 4]}>
                                <mesh
                                    name="Object_58"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_58.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube028_56" position={[0.695, 0, 3.939]}>
                                <mesh
                                    name="Object_60"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_60.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube029_58" position={[1.368, 0, 3.759]}>
                                <mesh
                                    name="Object_62"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_62.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube030_60" position={[2, 0, 3.464]}>
                                <mesh
                                    name="Object_64"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_64.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube031_62" position={[2.571, 0, 3.064]}>
                                <mesh
                                    name="Object_66"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_66.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube032_64" position={[3.064, 0, 2.571]}>
                                <mesh
                                    name="Object_68"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_68.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube033_66" position={[3.464, 0, 2]}>
                                <mesh
                                    name="Object_70"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_70.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube034_68" position={[3.759, 0, 1.368]}>
                                <mesh
                                    name="Object_72"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_72.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                            <group name="Cube035_70" position={[3.939, 0, 0.695]}>
                                <mesh
                                    name="Object_74"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_74.geometry}
                                    material={matcapMaterial}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/metal_gear_solid.glb')
