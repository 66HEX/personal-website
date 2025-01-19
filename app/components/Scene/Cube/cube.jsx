import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function RubiksCubeModel(props) {
    const size = 1;
    const gap = 0.01;
    const radius = 0.125;
    const animationDuration = 1.2;
    const mainGroupRef = useRef();

    const initializeCubes = () => {
        const initial = [];
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                for (let z = -1; z <= 1; z++) {
                    initial.push({
                        position: new THREE.Vector3(x, y, z),
                        rotationMatrix: new THREE.Matrix4().identity(),
                        colors: ['white', 'yellow', 'red', 'orange', 'blue', 'green']
                    });
                }
            }
        }
        return initial;
    };

    const [cubes, setCubes] = useState(initializeCubes);
    const [currentMove, setCurrentMove] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentRotation, setCurrentRotation] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [lastMoveAxis, setLastMoveAxis] = useState(null);

    const isInLayer = (position, axis, layer) => {
        const coord = axis === 'x' ? position.x : (axis === 'y' ? position.y : position.z);
        return Math.round(coord) === layer - 1;
    };

    const possibleMoves = [
        { axis: 'x', layer: 1, direction: 1 },
        { axis: 'x', layer: 1, direction: -1 },
        { axis: 'x', layer: 2, direction: 1 },
        { axis: 'x', layer: 2, direction: -1 },
        { axis: 'x', layer: 3, direction: 1 },
        { axis: 'x', layer: 3, direction: -1 },
        { axis: 'y', layer: 1, direction: 1 },
        { axis: 'y', layer: 1, direction: -1 },
        { axis: 'y', layer: 2, direction: 1 },
        { axis: 'y', layer: 2, direction: -1 },
        { axis: 'y', layer: 3, direction: 1 },
        { axis: 'y', layer: 3, direction: -1 },
        { axis: 'z', layer: 1, direction: 1 },
        { axis: 'z', layer: 1, direction: -1 },
        { axis: 'z', layer: 2, direction: 1 },
        { axis: 'z', layer: 2, direction: -1 },
        { axis: 'z', layer: 3, direction: 1 },
        { axis: 'z', layer: 3, direction: -1 },
    ];

    const selectNextMove = () => {
        if (!isAnimating && isVisible) {
            const availableMoves = possibleMoves.filter(move => move.axis !== lastMoveAxis);
            const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
            const rotationAngle = Math.random() < 0.5 ? Math.PI / 2 : Math.PI;
            setCurrentMove({ ...move, rotationAngle });
            setLastMoveAxis(move.axis);
            setIsAnimating(true);
            setCurrentRotation(0);
        }
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            const isPageVisible = document.visibilityState === 'visible';
            setIsVisible(isPageVisible);

            if (!isPageVisible) {
                setCubes(initializeCubes());
                setCurrentMove(null);
                setIsAnimating(false);
                setCurrentRotation(0);
                setLastMoveAxis(null);

                if (mainGroupRef.current) {
                    mainGroupRef.current.rotation.set(0, 0, 0);
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        let timeoutId;

        const scheduleNextMove = () => {
            if (isVisible) {
                timeoutId = setTimeout(() => {
                    selectNextMove();
                    scheduleNextMove();
                }, isAnimating ? animationDuration * 1000 : 200);
            }
        };

        scheduleNextMove();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isAnimating, isVisible]);

    const createRotationMatrix = (axis, angle) => {
        const matrix = new THREE.Matrix4();
        const quaternion = new THREE.Quaternion();
        const rotationAxis = new THREE.Vector3();
        rotationAxis[axis] = 1;
        quaternion.setFromAxisAngle(rotationAxis, angle);
        return matrix.makeRotationFromQuaternion(quaternion);
    };

    const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    useFrame((state, delta) => {
        if (!isVisible) return;

        if (mainGroupRef.current) {
            mainGroupRef.current.rotation.x += delta * 0.3;
            mainGroupRef.current.rotation.y += delta * 0.5;
            mainGroupRef.current.rotation.z += delta * 0.2;
        }

        if (isAnimating && currentMove) {
            const targetRotation = currentMove.rotationAngle;
            const rotation = delta / animationDuration;

            if (currentRotation < 1) {
                const newRotation = currentRotation + rotation;
                setCurrentRotation(newRotation);

                const easedProgress = easeInOutQuad(newRotation);
                const currentAngle = easedProgress * targetRotation;
                const prevAngle = easeInOutQuad(currentRotation) * targetRotation;
                const stepRotation = currentAngle - prevAngle;

                const stepRotationMatrix = createRotationMatrix(
                    currentMove.axis,
                    stepRotation * currentMove.direction
                );

                setCubes(prevCubes =>
                    prevCubes.map(cube => {
                        if (isInLayer(cube.position, currentMove.axis, currentMove.layer)) {
                            const position = new THREE.Vector3(
                                cube.position.x,
                                cube.position.y,
                                cube.position.z
                            );

                            position.applyMatrix4(stepRotationMatrix);

                            const newRotationMatrix = new THREE.Matrix4()
                                .multiplyMatrices(stepRotationMatrix, cube.rotationMatrix);

                            return {
                                ...cube,
                                position: position,
                                rotationMatrix: newRotationMatrix
                            };
                        }
                        return cube;
                    })
                );
            } else if (currentRotation >= 1) {
                setCurrentRotation(1);
                setCubes(prevCubes =>
                    prevCubes.map(cube => {
                        if (isInLayer(cube.position, currentMove.axis, currentMove.layer)) {
                            const finalRotationMatrix = createRotationMatrix(
                                currentMove.axis,
                                targetRotation * currentMove.direction
                            );

                            return {
                                ...cube,
                                position: new THREE.Vector3(
                                    Math.round(cube.position.x),
                                    Math.round(cube.position.y),
                                    Math.round(cube.position.z)
                                ),
                                rotationMatrix: new THREE.Matrix4()
                                    .multiplyMatrices(finalRotationMatrix, cube.rotationMatrix)
                            };
                        }
                        return cube;
                    })
                );
                setIsAnimating(false);
                setCurrentRotation(0);
                setCurrentMove(null);
            }
        }
    });

    const matrixToQuaternion = (matrix) => {
        const quaternion = new THREE.Quaternion();
        quaternion.setFromRotationMatrix(matrix);
        return quaternion;
    };

    const chromeMaterial = {
        color: '#000000',
        metalness: 1,
        roughness: 0.05,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
        reflectivity: 1,
        iridescence: 0,
        iridescenceIOR: 0,
        iridescenceThicknessRange: [100, 400],
        envMapIntensity: 3.5
    };

    return (
        <group ref={mainGroupRef} {...props}>
            {cubes.map((cube, index) => (
                <group
                    key={index}
                    position={[
                        cube.position.x * (size + gap),
                        cube.position.y * (size + gap),
                        cube.position.z * (size + gap)
                    ]}
                    quaternion={matrixToQuaternion(cube.rotationMatrix)}
                >
                    <RoundedBox
                        args={[size, size, size]}
                        radius={radius}
                        smoothness={4}
                        castShadow
                        receiveShadow
                    >
                        <meshPhysicalMaterial {...chromeMaterial} />
                    </RoundedBox>
                </group>
            ))}
        </group>
    );
}

export default RubiksCubeModel;