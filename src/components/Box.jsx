import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = () => {
  // const meshRef = useRef();
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

export default Box;
