import './App.css'
import './input.css'

import imageExmple from './assets/img.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUsersName from './components/ShowUsersName'
import CardDetails from './components/CardDetails'

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

      {/* Renderização Condicional */}
      <ConditionalRender/>

      {/* Props */}
      <ShowUsersName name="José"/>

      {/* Desestruturando Props & Reaproveitamento */}
      <CardDetails brand="BMW" km={10000} color="Blue"/>
      <CardDetails brand="Tesla" km={12000} color="Red"/>
      <CardDetails brand="Volvo" km={11000} color="Black"/>
     </div>
    </>
  )
}

export default App;
