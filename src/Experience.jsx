import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  Text,
} from "@react-three/drei";
import { Laptop } from "./components/Laptop";

export default function Experience() {
  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 1.5, tension: 400 }}
        snap={{ mass: 3, tension: 200 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <Laptop />

          <Text
            font="../bangers-v20-latin-regular.woff"
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            Rodrigo Cabrera
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={6} blur={3} />
    </>
  );
}
