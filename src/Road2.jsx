import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Road = () => {
    const barrier = useLoader(GLTFLoader, './models/road2.glb');
    const b_ref = useRef();
    const [pos, setp] = useState(0);
    useFrame((state, delta) => { // maybe have var to check for 
        if (pos === 0){
            b_ref.current.position.z = 15;
            setp(2);
        }
        b_ref.current.position.z -= 0.1;
        if (b_ref.current.position.z < -6){
            b_ref.current.position.z = 14.9;
        }
    })
    return (
        <mesh
        ref={b_ref}
        scale={0.02}>
            <primitive
            object={barrier.scene}
            position={[0,-13,0]}
            children-0-castShadow
        />
        </mesh>
    )
}
export default Road;
