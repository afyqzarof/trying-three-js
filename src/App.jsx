import { Canvas } from "@react-three/fiber";
import "./App.scss";
import Box from "./components/Box";
import { OrbitControls, PresentationControls } from "@react-three/drei";

function App() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
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
      <Box />
    </Canvas>
  );
}
export default App;
