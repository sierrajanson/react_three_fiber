import {useRef, useState, useEffect, Suspense} from "react";
import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';
import Plane from './Plane';
import Barrier_mid from './Barrier_mid';
import Road from './Road';
import Train from './Train';
import Player_2 from "./Player_2";
import Wall from './Wall';
import Wall2 from './Wall2';
import Mula from './Mula';
import Cybertruck from './Cybertruck';
import Baymax from './Baymax';
import "./styles.css";
import {Outlet,Link} from "react-router-dom";
export default function Bear() {
  const [x_val, upd] = useState(0);
  const [y_val, updy] = useState(0);
  const [pos, set] = useState(2);
  const gltf = useLoader(GLTFLoader, './models/cute_bear.glb');
  const [visible, setVisible] = useState(true);
  let testing = {bar1:0,bar2:0,bar3:0,play_2:0,round:0}
  let pos_manager = {pos_1: pos}
  const ref = useRef();
  const live_animation = () => {
    if (pos === 1 && testing.bar1 === 1 && y_val <0.4){
      setVisible(false);
    }
    if (pos === 2 && testing.bar2 === 1 && y_val <0.4){
      setVisible(false);
    }
    if (pos === 3 && testing.bar3 === 1 && y_val <0.4){
      setVisible(false);
    }
    if (testing.play_2 === 1){
      setVisible(false);
    }
    ref.current.position.x = x_val;
    ref.current.position.y = y_val;
    if (y_val > 0){
      ref.current.rotation.x += y_val*1;
      updy(y_val-0.05);
    }
  }
  const end_animation = () => {
    ref.current.position.y = 1.5;
  }

  const Bear = (props) => {
    useFrame((state, delta) => { 
      if (props.animation === 0 ){
        live_animation();
      }
      else {
        end_animation();
      }
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
  const detectKeys = (e) => {
    if (e.key === "a"){
    if (pos === 2){
        upd(0.5);
        set(1);
        pos_manager.pos_1 = 1;
    }
    if (pos === 3){
        upd(0);
        set(2);
        pos_manager.pos_1 = 2;

    }
    }
    if (e.key === "w"){
    updy(1.1);
    }
    if (e.key === "d") {
    if (pos === 2){
        upd(-0.5);
        set(3);
        pos_manager.pos_1 = 3;
    }
    if (pos === 1){
        upd(0);
        set(2);
        pos_manager.pos_1 = 3;
    }
    }
}
  useEffect(() => {
    document.addEventListener('keydown', detectKeys, true);
  })
  return (
    <div className="container">

      <div className="dog_holder">
        {visible ? (
        <Canvas camera={{ position: [0, 0.5, -3], near: 0.025 }}>
        <directionalLight
          position={[0,1,-2]}
          castShadow
          intensity={Math.PI * 2}
        />
          <Mula
          glb={'./models/stylized_coin.glb'}
            pos_manager={pos_manager}
            init_pos={-10}/>
          <Mula
          glb={'./models/styl_coin.glb'}
            pos_manager={pos_manager}
            init_pos={-8}/>
          <Mula
          glb={'./models/styl_coin2.glb'}
            pos_manager={pos_manager}
            init_pos={-12}/>
          <Barrier_mid
          b_pos={0.5}
          get_em={testing}
          pos_var={1}
          glb={'./models/blocker_jump.glb'}/>
          <Barrier_mid
          b_pos={0}
          get_em={testing}
          pos_var={2}
          glb={'./models/blocker_jump1.glb'}/>
          <Barrier_mid
          b_pos={-0.5}
          pos_var={3}
          get_em={testing}
          glb={'./models/blocker_jump2.glb'}/>
          <Bear
          animation={0}/>
          <Player_2
          get_em={testing}
          />
          <Cybertruck/>
          <Baymax/>
          <Train
          b_pos={0}
          get_em={testing}
          pos_var={2}
          glb={'./models/subway_surfers_train.glb'}/>
          <Train
          b_pos={-0.5}
          get_em={testing}
          pos_var={3}
          glb={'./models/train.glb'}/>
          <Plane/>
          <Wall
            get_em={testing}/>
          <Wall2
            get_em={testing}/>
          <Road
            start_x={1}
            glb={'./models/road.glb'}/>
          <Road
            start_x={8}
            glb={'./models/road1.glb'}/>
          <Road
            start_x={15}
            glb={'./models/road2.glb'}/>
        <OrbitControls/>
        </Canvas>): (
        <div className="death_screen">
          <h1> New High Score! </h1>
          <h3> 9121522521 </h3>
          <Canvas camera={{ position: [0, 0.5, 3], near: 0.025}}>
            <directionalLight
            position={[0,1,2]}
            castShadow
            intensity={Math.PI * 2}
          />
            <Bear
            animation={1}/>
            <OrbitControls/>
          </Canvas>
          <Link to="/" className="play_link">Click to continue</Link>
          <Outlet/>
        </div>
      )}
    </div>
    </div>
)
}

