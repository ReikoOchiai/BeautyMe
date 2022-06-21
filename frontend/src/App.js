import React from "react";
import "./App.scss";
import Three from "./Three.js";
// import { Box } from "@react-three/drei";

// const SpinningMesh = ({ position, args, color }) => {
//   const mesh = useRef(null);
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
//   return (
//     <mesh position={position} ref={mesh}>
//       <boxBufferGeometry attach="geometry" args={args} />
//       <meshStandardMaterial attach="material" color={color} />
//     </mesh>
//   );
// };

function App() {
  return (
    <>
      <Three />
      {/* <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color="hotpink" />
        <SpinningMesh
          position={[-2, 1, -5]}
          args={[1, 1, 2]}
          color="lightpink"
        />
        <SpinningMesh
          position={[5, 1, -2]}
          args={[1, 1, 1]}
          color="lightpink"
        />
      </Canvas> */}
    </>
  );
}

export default App;
