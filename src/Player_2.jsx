import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';

const Player_2 = (e) => {
    const [x_val, upd] = useState(0);
    const [y_val, updy] = useState(0);
    const [pos, set] = useState(2);
    const gltf = useLoader(GLTFLoader, './models/bear.glb');
    const ref = useRef();
        useFrame((state, delta) => {
            ref.current.position.x = x_val;
            ref.current.position.y = y_val;
            if (y_val > 0){
            updy(y_val-0.05);
            }
        })
        const detectKeys = (e) => {
            if (e.key === "j"){
            if (pos === 2){
                upd(0.5);
                set(3);
            }
            if (pos === 1){
                upd(0);
                set(2);
            }
            }
            if (e.key === "i"){
            updy(1.3);
            }
            if (e.key === "l") {
            if (pos === 3){
                upd(0);
                set(2);
            }
            if (pos === 2){
                upd(-0.5);
                set(1);
            }
            }
        }
        useEffect(() => {
            document.addEventListener('keydown', detectKeys, true);
        })
    return (
        <mesh ref={ref}
        scale={0.055}>
            <primitive
            object={gltf.scene}
            position={[0,-0.32,-2]}
            children-0-castShadow
        />
        </mesh>
    )
}
export default Player_2;