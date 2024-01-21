import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Barrier = (props) => {
    const barrier = useLoader(GLTFLoader, './models/blocker_jump.glb');
    const b_ref = useRef();
    const [pos, setp] = useState(0);
    useFrame((state, delta) => { // maybe have var to check for 
        if (pos === 0){
            b_ref.current.position.z = 10;
            setp(2);
        }// maybe have var to check for 
        props.get_em.var1 =8;
        b_ref.current.position.x = props.b_pos;
        b_ref.current.position.z -= 0.1;
        props.get_em.bar = 0;
        if (b_ref.current.position.z < -5){
            b_ref.current.position.z = 10;
        }
        if (b_ref.current.position.z > -0.5 && b_ref.current.position.z < -0.4){
            props.get_em.bar = 1;
        }
    })
    return (
        <mesh
        ref={b_ref}
        scale={0.02}>
            <primitive
            object={barrier.scene}
            position={[0,-14,5]}
            children-0-castShadow
        />
        </mesh>
    )
}
export default Barrier;
