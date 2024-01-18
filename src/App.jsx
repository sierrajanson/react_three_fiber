import Dog from './Dog.jsx';

export default function App() {
  
  return (
    <>
      <div className="container">
        <h1> gottem </h1>
        <div className="dog">
          <div className="dog_holder">
            <Dog/>
          </div>
        </div>
      </div>
    </>
  )
}

//useGLTF.preload(Models.map(({ url }) => url))
// https://sbcode.net/react-three-fiber/use-gltf/ use this template