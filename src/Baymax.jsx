import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Plane = () => {
    const plane = useLoader(GLTFLoader, './models/baymax.glb');
    const mula_ref = useRef();
    const [pos, setp] = useState(0);
     useFrame((state, delta) => { // maybe have var to check for 
        if (pos === 0){
            mula_ref.current.position.z = -100;
            setp(2);
        }
        if (mula_ref.current.position.y < 10 && mula_ref.current.position.z > 2){
            mula_ref.current.position.y += 0.1;
        } else if (mula_ref.current.position.z > 50){
            mula_ref.current.position.z= 1000;
        }
        else{
            mula_ref.current.rotation.x = -1;
            mula_ref.current.position.z += 0.1;
        }
     })

     return (
         <mesh
         ref={mula_ref}
         scale={1.3}>
             <primitive
             object={plane.scene}
             position={[-1.4,-1,-5]}
             children-0-castShadow
         />
         </mesh>
     )
}

export default Plane;