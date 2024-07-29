import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import points from './points';
import { OrbitControls } from '@react-three/drei';

const PointCloud: React.FC = () => {
  const positions = useMemo(() => {
    const positionArray = new Float32Array(points);
    return new THREE.BufferAttribute(positionArray, 3);
  }, []);

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" {...positions} />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="blue" />
      </points>
      <OrbitControls />
    </Canvas>
  );
};

export default PointCloud;
