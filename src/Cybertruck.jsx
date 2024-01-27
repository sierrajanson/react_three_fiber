import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Plane = () => {
    const plane = useLoader(GLTFLoader, './models/tesla_cybertruck.glb');
    const mula_ref = useRef();
    const [pos, setp] = useState(0);
     useFrame((state, delta) => { // maybe have var to check for 
         if (pos === 0){
            mula_ref.current.position.z = -10;
            setp(2);
         }
         if (mula_ref.current.position.z > 3){
            mula_ref.current.position.y += 0.05;
         }
         if (mula_ref.current.position.z > 30){
            mula_ref.current.position.y += 1;
         }
         mula_ref.current.position.z += 0.3;
        //  if (mula_ref.current.position.z > -4 && mula_ref.current.position.z < -3 && props.pos_manager.pos_1 === 1){
        //      mula_ref.current.position.z = -10;
        //  }
         if (mula_ref.current.position.z < -20){
             mula_ref.current.position.z = 40;
         }
     
     })
     return (
         <mesh
         ref={mula_ref}
         scale={1.3}>
             <primitive
             object={plane.scene}
             position={[-1.75,-0.46,-1]}
             children-0-castShadow
         />
         </mesh>
     )
}

export default Plane;