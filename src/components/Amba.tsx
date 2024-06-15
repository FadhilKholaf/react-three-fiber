import { OrbitControls } from "@react-three/drei";
import Flower from "./Flower";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Amba() {
  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={1} />
      <Flower position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={0.4}
          intensity={.4}
        />
      </EffectComposer>
    </>
  );
}
