import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

import Model from './Model'
import Loader from './Loader'

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <Model />
          <OrbitControls />
          {/* preset sunset adds sunset, backgroud adds background image */}
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
