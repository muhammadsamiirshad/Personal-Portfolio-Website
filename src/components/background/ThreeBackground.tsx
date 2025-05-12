'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCubes = () => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  // Generate a bunch of cubes at different positions
  const cubes = Array.from({ length: 10 }, (_, i) => {
    const positionFactor = 7;
    const position = [
      (Math.random() - 0.5) * positionFactor,
      (Math.random() - 0.5) * positionFactor,
      (Math.random() - 0.5) * positionFactor
    ];
    const size = Math.random() * 0.5 + 0.1;
    const rotation = [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    ];
    const rotationSpeed = Math.random() * 0.01 + 0.001;
    return { position, size, rotation, rotationSpeed, id: i };
  });

  return (
    <group ref={group}>
      {cubes.map((cube) => (
        <Float
          key={cube.id}
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          position={cube.position as [number, number, number]}
        >
          <mesh 
            rotation={cube.rotation as [number, number, number]}
            castShadow
          >
            <boxGeometry args={[cube.size, cube.size, cube.size]} />
            <meshStandardMaterial 
              color={new THREE.Color().setHSL(Math.random(), 0.7, 0.5)}
              metalness={0.7} 
              roughness={0.2} 
              emissive={new THREE.Color().setHSL(Math.random(), 0.8, 0.4)}
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <pointLight position={[10, -10, 10]} intensity={0.5} color="#06B6D4" />
        <FloatingCubes />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
