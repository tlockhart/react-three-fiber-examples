import { useLoader } from "@react-three/fiber";
// import { useTexture } from "@react-three/drei"
import { TextureLoader } from "three/src/loaders/TextureLoader";

// All textures are CC0 textures from: https://cc0textures.com/
const name = (type) => `PavingStones092_1K_${type}.jpg`;

// create a scene
const Scene = () => {
    // Load all textures files from public directory
    const [
        colorMap,
        displacementMap,
        normalMap,
        roughnessMap,
        aoMap
    ] = useLoader(TextureLoader, [
        name("Color"),
        name("Displacement"),
        name("Normal"),
        name("Roughness"),
        name("AmbientOcclusion")
    ]);
    // const [
    //   colorMap,
    //   displacementMap,
    //   normalMap,
    //   roughnessMap,
    //   aoMap
    // ] = useTexture([
    //   name("Color"),
    //   name("Displacement"),
    //   name("Normal"),
    //   name("Roughness"),
    //   name("AmbientOcclusion")
    // ]);
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh>
                {/* Width and height segments for displacementMap */}
                <sphereBufferGeometry args={[1, 100, 100]} />
                {/* Apply the textures with colorMap etc */}
                <meshStandardMaterial
                    displacementScale={0.2}
                    map={colorMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    aoMap={aoMap}
                />
            </mesh>
        </>
    );
}

export default Scene;