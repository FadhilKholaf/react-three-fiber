import { Canvas } from "@react-three/fiber";
import "./App.css";
import Flower from "./components/Flower";

function App() {
  return (
    <>
      <Canvas>
        <Flower />
      </Canvas>
    </>
  );
}

export default App;
