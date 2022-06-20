import React, { useRef } from "react";
import "./App.scss";
import { Canvas, useFrame } from "react-three-fiber";
// import { Box } from "@react-three/drei";

const SpinningMesh = ({ position, args }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color="light pink" />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <SpinningMesh position={[0, 1, 0]} args={[2, 2, 2]} />
        <SpinningMesh position={[-2, 1, -5]} args={[1, 1, 1]} />
        <SpinningMesh position={[5, 1, -2]} args={[1, 1, 1]} />
      </Canvas>
    </>
  );
}

export default App;
