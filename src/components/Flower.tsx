import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import FlowerModel from "./FlowerModel";
import { ASCII, EffectComposer } from "@react-three/postprocessing";

export default function Flower() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 3, 0]} />
      <ambientLight intensity={3} />
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={3}
      />
      <FlowerModel position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]} />
      <EffectComposer>
        <ASCII characters=" TRISNA" fontSize={60} />
      </EffectComposer>
    </>
  );
}
