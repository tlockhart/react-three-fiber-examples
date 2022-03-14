import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const MyAnimatedBox = () => {
    // Reference to Mesh Component
  const myMesh = useRef();

  // Where we conduct THREEJS animations in react
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // console.log(`ElapsedTime: ${elapsedTime}`);
    // myMesh.current.rotation.x = clock.getElapsedTime()
    myMesh.current.position.y = Math.sin(clock.getElapsedTime())
  });

  // Don't use state for continuous updates, for animations we want to directly mutate our mesh each frame
  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  );
};

export default MyAnimatedBox;
