import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Train = (props) => {
    const barrier = useLoader(GLTFLoader, props.glb);
    const b_ref = useRef();
   const [pos, setp] = useState(0);
    useFrame((state, delta) => { // maybe have var to check for 
        if (pos === 0){
            b_ref.current.position.z = -20;
            setp(2);
        }
        b_ref.current.position.x = props.b_pos
        b_ref.current.position.z -= 0.25;

        let pos_updater = 0;
        if (b_ref.current.position.z < -60){
            b_ref.current.position.z = 15;
        }
        if (b_ref.current.position.z >= 0.5 && b_ref.current.position.z <= 1.4){
            pos_updater = 1;
        }
        if (props.pos_var === 1){
            props.get_em.bar1 = pos_updater;
        } else if (props.pos_var === 2){
            props.get_em.bar2 = pos_updater;
        } else {
            props.get_em.bar3 = pos_updater;
        }
    })
    return (
        <mesh
        ref={b_ref}
        scale={0.03}>
            <primitive
            object={barrier.scene}
            position={[0,-14,10]}
            children-0-castShadow
        />
        </mesh>
    )
}
export default Train;
