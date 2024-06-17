import { Canvas } from "@react-three/fiber";
import "./App.css";
import Flower from "./components/Flower";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Canvas>
        <Suspense
          fallback={
            <>
              <h1>Loading...</h1>
            </>
          }
        >
          <Flower />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
