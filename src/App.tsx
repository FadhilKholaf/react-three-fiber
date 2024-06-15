import { Canvas } from "@react-three/fiber";
import "./App.css";
import Amba from "./components/Amba";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback={<>Loading...</>}>
          <Amba />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
