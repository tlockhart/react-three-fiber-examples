import React, { Suspense } from "react";
import { Canvas } from"@react-three/fiber";
import { OrbitControls, } from "@react-three/drei";


import Scene from "./Scene"

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Canvas>
      <Suspense fallback={null}>
          <Scene />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}
