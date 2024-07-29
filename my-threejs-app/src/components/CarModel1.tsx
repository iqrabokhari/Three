// CarModel.tsx
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CarModel: React.FC = () => {
  const { scene, animations } = useGLTF('/cars/scene.gltf');
  const ref = useRef<THREE.Group>(null!);

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <OrbitControls />

      <primitive object={scene} ref={ref} />
    </Canvas>
  );
};

export default CarModel;
