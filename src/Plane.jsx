import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Plane = () => {
    const plane = useLoader(GLTFLoader, './models/a320.glb');
    const mula_ref = useRef();
    const [pos, setp] = useState(0);
     useFrame((state, delta) => { // maybe have var to check for 
         if (pos === 0){
            mula_ref.current.position.z = 500;
            setp(2);
         }
         mula_ref.current.position.y = 3.7;
         mula_ref.current.position.z -= 0.5;
        //  if (mula_ref.current.position.z > -4 && mula_ref.current.position.z < -3 && props.pos_manager.pos_1 === 1){
        //      mula_ref.current.position.z = -10;
        //  }
         if (mula_ref.current.position.z < -20){
             mula_ref.current.position.z = -40;
         }
     
     })
     return (
         <mesh
         ref={mula_ref}
         scale={0.1}>
             <primitive
             object={plane.scene}
             position={[0,-10,10]}
             children-0-castShadow
         />
         </mesh>
     )
}

export default Plane;