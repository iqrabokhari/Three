import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// AnimatedCar component for moving the car
const CarModel1: React.FC = () => {
  const { scene, animations } = useGLTF('/cars/scene.gltf');
  const ref = useRef<THREE.Group>(null!);
  const mixer = useRef<THREE.AnimationMixer>();

  // Initialize the animation mixer
  useEffect(() => {
    if (animations) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current!.clipAction(clip).play();
      });
    }
  }, [animations, scene]);

  // Update the animation mixer and apply custom movement on each frame
  useFrame((state, delta) => {
    mixer.current?.update(delta);

    // Custom animation logic: move the car model along the x-axis
    if (ref.current) {
      ref.current.position.z += 0.03; // Adjust speed as needed
      if (ref.current.position.z > 5) {
        // Boundary to reset position
        ref.current.position.z = -5; // Reset to start position
      }
    }
  });

  return <primitive object={scene} ref={ref} />;
};

// Main CarModel component
const CarModel: React.FC = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls />
      <CarModel1 /> {/* Add AnimatedCar component here */}
    </Canvas>
  );
};

export default CarModel;
