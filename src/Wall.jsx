import {useState, useRef} from "react";
import {useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Wall = (props) => {
    const wall = useLoader(GLTFLoader, './models/tunnel_3.glb');
    const ref = useRef();
    const [pos, setp] = useState(0);
    useFrame((state, delta) => { // maybe have var to check for 
        if (pos === 0){
            ref.current.position.z = -120;
            setp(2);
        }
        ref.current.position.z -= 0.1;
        if (ref.current.position.z < -200){
            ref.current.position.z = 20;
        }
        props.get_em.bar1= 0;
        props.get_em.bar2= 0;
        if (ref.current.position.z <= 0.01 && ref.current.position.z >= -3){
            props.get_em.bar1= 1;
            props.get_em.bar2= 1;
        }
    })

    return (
        <mesh
        ref={ref}
        scale={0.02}>
            <primitive
            object={wall.scene}
            position={[0,-13,-9]}
            children-0-castShadow
        />
        </mesh>
    )
}
    
export default Wall;