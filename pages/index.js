import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

// Start of custom components
// Card related
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Container,
  Stack,
} from "@mui/material";

import Tesla from "../components/tesla";
import { Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  Environment,
  Html,
  OrbitControls,
  useHelper,
  useProgress,
} from "@react-three/drei";
import { PointLightHelper } from "three";
import { fontSize } from "@mui/system";

const inter = Inter({ subsets: ["latin"] });

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  console.log(progress);
  return <Html center>{progress} % loaded</Html>;
}

function Boxy(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const CarWithAnimation = (props) => {
  const carRef = useRef();

  // useFrame(({ camera, clock }) => {
  //   carRef.current.position.y = -window.scrollY / 300;
  //   carRef.current.rotation.x = window.scrollY / 1000;
  //   carRef.current.rotation.y = clock.getElapsedTime() / 2;
  //   camera.position.x = -window.scrollY / 200;
  //   camera.position.y = window.scrollY / 1000;
  //   // camera.position.z = (1 - window.scrollY / 1000);
  //   // console.log("x=" + camera.position.x + ", y=" + camera.position.y + ", z=" + camera.position.z );
  //   // camera.position.z = curZ + window.scrollY / 1000;
  // });

  return (
    <mesh {...props} rotation={[0, 0, 0]}>
      <Tesla />
    </mesh>
  );
};

const PointLightWithHelper = () => {
  const pLightHelper = useRef();
  // useHelper(pLightHelper, PointLightHelper);

  return (
    <>
      <pointLight position={[2, 2, 2]} ref={pLightHelper} />
    </>
  );
};

export default function Home() {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* I would like to add a simple 3D animation created by three.js here. That should be quite a enticing landing page */}
        <Box sx={{ height: "300vh", width: "100%" }}>
          <Typography variant="h2" textAlign="center">
            CAR.com
          </Typography>
          <Typography variant="h4" textAlign="center">
            Your one-stop for all your car-related needs
          </Typography>
          {/* <Canvas style={{ position: "fixed", top: 0, left: 0 }}>
            <Suspense fallback={<Loader />}>
              <Boxy position={[1, 1, 1]} />
              <Boxy position={[-1, -1, -1]} />
              <CarWithAnimation position={[0,0,0]}/>
              <OrbitControls enableZoom={true} enableRotate={true} />
              <PointLightWithHelper />
              <gridHelper />
              <ambientLight intensity={10} />
            </Suspense>
          </Canvas> */}
        </Box>
        <Container maxWidth="md">
          <Stack direction="row" spacing={2}>
            <Card sx={{ maxWidth: 345, flex: 1 }}>
              <CardActionArea onClick={() => navigate("buy")}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/buy.jpg"
                  alt="green iguana"
                />
                <CardContent sx={{ height: "8.2rem" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Buy a car
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Browse our list to find your next dream car!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, flex: 1 }}>
              <CardActionArea onClick={() => navigate("sell")}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/buy.jpg"
                  alt="green iguana"
                />
                <CardContent sx={{ height: "8.2rem" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Sell a car
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Want to sell your car? We got you covered!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, flex: 1 }}>
              <CardActionArea onClick={() => navigate("rent")}>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/buy.jpg"
                  alt="green iguana"
                />
                <CardContent sx={{ height: "8.2rem" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Rent a car
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Wanted to try out a car before buying it? You can rent one
                    to experience it yourself!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Container>
      </main>
    </>
  );
}
