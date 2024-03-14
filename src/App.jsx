import { Canvas, useLoader } from "@react-three/fiber";
import "./App.scss";
import Box from "./components/Box";
import {
  OrbitControls,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
// import { Model } from "./components/Donut";
import { Model } from "./components/Sunflower";

function App() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ position: [0, 0, 0.3] }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        // intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls />
      {/* <Box /> */}
      <Model />
    </Canvas>
  );
}
export default App;
