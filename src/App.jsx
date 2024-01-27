import Landing from './Landing.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Bear from './Bear';
export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/bear' element={<Bear/>}/>
        </Routes>
     </Router>
    </>
  )
}

//useGLTF.preload(Models.map(({ url }) => url))
// https://sbcode.net/react-three-fiber/use-gltf/ use this template