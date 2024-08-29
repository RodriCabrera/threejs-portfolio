import { Html, useGLTF } from "@react-three/drei";

export const Laptop = () => {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  return (
    <>
      <primitive object={computer.scene} position-y={-1.2} />
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={[0, 0.36, -1.41]}
        rotation-x={-0.256}
      >
        <iframe src="/portfolio.html" />
      </Html>
    </>
  );
};
