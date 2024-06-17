import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import FlowerModel from "./FlowerModel";
import { Bloom, EffectComposer, Pixelation } from "@react-three/postprocessing";

export default function Flower() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 3, 0]} />
      <ambientLight intensity={3} />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={5}
      />
      <FlowerModel position={[0, -0.7, 0]} scale={[0.4, 0.4, 0.4]} />
      <EffectComposer>
        <Pixelation granularity={5} />
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={0.4}
          intensity={0.4}
        />
      </EffectComposer>
    </>
  );
}
