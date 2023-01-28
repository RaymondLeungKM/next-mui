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
  //   if (t[1].type == "Mesh") {
  //     return <mesh key={k} geometry={t[1].geometry} material={t[1].material} scale={t[1].scale}></mesh>;
  //   }
  // });

  const carModel = Object.entries(nodes).map((t, k) => {
    if (t[1].type == "Object3D" && t[1].children.length == 1) {
      console.log(t[1])
      return (
        <mesh
          key={k}
          geometry={t[1].children[0].geometry}
          material={t[1].children[0].material}
          scale={t[1].scale}
        ></mesh>
      );
    }
  });

  // const carModel = nodes.Sketchfab_model.children[0].children.map((child)=>{
  //   return <mesh key={child.children[0].uuid} geometry={child.children[0].geometry} material={child.children[0].material} scale={child.children[0].scale}></mesh>;
  // })

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
