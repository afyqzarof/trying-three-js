import { Canvas, useLoader } from "@react-three/fiber";
import "./App.scss";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
// import { Model } from "./components/Donut";
import { Model } from "./components/Sunflower";

function App() {
  return (
    // <div style={{ backgroundColor: "red" }}>
    <Canvas flat dpr={[1, 2]} camera={{ position: [0, 0, 12] }}>
      <ambientLight intensity={4} />
      {/* <spotLight
        position={[3, 3, 3]}
        angle={0.15}
        penumbra={1}
        decay={0}
        // intensity={Math.PI}
      /> */}
      {/* <pointLight position={[0, 0, 10]} /> */}
      <OrbitControls
        makeDefault
        enableZoom={false}
        minPolarAngle={1.57079}
        maxPolarAngle={1.57079}
      />
      {/* <Box /> */}
      <Model scale={[2, 2, 2]} />
    </Canvas>
    // </div>
  );
}
export default App;
