import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Tesla(props) {
  // const teslaModel = useLoader(
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "http://localhost:3000/static/images/car.glb"
  );

  console.log(nodes);
  console.log(materials);

  // const carModel = Object.entries(nodes).map((t, k) => {
  //   if (t[1].material) {
  //     return <mesh key={k} geometry={t[1].geometry} material={t[1].material} scale={t[1].scale}></mesh>;
  //   }
  // });

  const carModel = nodes.Sketchfab_model.children[0].map()

  return (
    // <>
    //   <primitive object={teslaModel.scene} scale={1} />
    // </>
    // Holy fuck you need to manually map all these nodes with their respective materials
    <group
      {...props}
      dispose={null}
      rotation={[Math.PI, 0, -Math.PI / 2]}
      scale={[1, 1, 1]}
    >
      {carModel}
    </group>
  );
}

export default Tesla;
