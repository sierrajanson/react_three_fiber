import {useRef, useState, Suspense} from "react";
import {Canvas, useFrame} from '@react-three/fiber';
import { Stats, OrbitControls, Environment, useGLTF, Clone } from '@react-three/drei'
import { useControls } from 'leva'


export default function Dog() {
  const Models = [
    { title: 'Dog', url: './models/halo_3_the_god_rat.glb' }
  ]
  function Model({url}) {
    const { scene } = useGLTF(url);
    return <Clone object={scene} />
  }
  const [hovering, setHoverStatus] = useState(false);
  const [clicked, setClick] = useState(false);
  const Sphere = (color,x_rot,y_rot) => {
    const ref = useRef();
    useFrame((state, delta)=>{
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;

    })
    // https://www.youtube.com/watch?v=M5nt1GamB_g video --> gltf file not loading properly as json file 
    return(
      <mesh 
        ref={ref} 
        position={[0,0,0]} 
        onPointerDown={() => setClick(true)}
        onPointerUp={() => setClick(false)}
        onPointerEnter={(event) => (event.stopPropagation, setHoverStatus(true))}
        onPointerLeave={() => setHoverStatus(false)}
      >
        <sphereGeometry args={[0.5,10,10]}/>
        <meshStandardMaterial color={hovering ? "white" : "pink"} wireframe />
      </mesh>
    );
  }
  return (
    <>
      <Canvas camera={{ position: [0, 0, -1], near: 0.025 }}>
      {/* <ambientLight intensity={1}/>
      <Sphere color="white" x_rot={0} y_rot={1}/> */}
        <Environment preset="forest" />
        <Suspense>
          <Model url={Models[0].url}/>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={20}/>
      </Canvas>
    </>
  )
}

//useGLTF.preload(Models.map(({ url }) => url))
