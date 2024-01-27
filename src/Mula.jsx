import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Mula = (props) => {
   const mula = useLoader(GLTFLoader, props.glb);
   const mula_ref = useRef();
   const [pos, setp] = useState(0);
    useFrame((state, delta) => { // maybe have var to check for 
        if (pos === 0){
            mula_ref.current.position.z = props.init_pos;
            setp(2);
        }
        mula_ref.current.position.y = 3.7;
        mula_ref.current.position.x = 0.5;
        mula_ref.current.position.z -= 0.1;
        if (mula_ref.current.position.z > -4 && mula_ref.current.position.z < -3 && props.pos_manager.pos_1 === 1){
            mula_ref.current.position.z = -10;
        }
        if (mula_ref.current.position.z < -20){
            mula_ref.current.position.z = 12;
        }
    
    })
    return (
        <mesh
        ref={mula_ref}
        scale={0.4}>
            <primitive
            object={mula.scene}
            position={[0,-10,10]}
            children-0-castShadow
        />
        </mesh>
    )
}
export default Mula;
