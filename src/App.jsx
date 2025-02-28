import './App.css'
import './input.css'

import imageExmple from './assets/img.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'

function App() {

  return (
    <>
     <div className='app'>
      <h1 className='text-2xl'> Avançando no react </h1>
      
      {/* Importando imagens */}
      {/* <img src="./assets/img.jpg" alt="Image not found" /> */}
      <img src={imageExmple}alt="Image not found" />

      <Data/>
      <ListRender/>
     </div>
    </>
  )
}

export default App;
