import Landing from './Landing.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dog from './Dog';

export default function App() {
  // useEffect(() => {
  //   document.addEventListener('keydown', detectKeyDown, true)},[])

  // const detectKeyDown = (e) => {
  //   console.log(e.key);
  // }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/dog' element={<Dog/>}/>
        </Routes>
     </Router>
    </>
  )
}

//useGLTF.preload(Models.map(({ url }) => url))
// https://sbcode.net/react-three-fiber/use-gltf/ use this template