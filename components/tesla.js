import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Tesla() {
  const teslaModel = useLoader(
    GLTFLoader,
    "http://localhost:3000/static/images/tesla_final_cycles.glb"
  );
  return (
    <>
      <primitive object={teslaModel.scene} scale={0.4} />
    </>
  );
}

export default Tesla;
