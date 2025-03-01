import './App.css'
import './input.css'

import imageExmple from './assets/monkey.jpg'
import Data from './components/Data'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUsersName from './components/ShowUsersName'
import CardDetails from './components/CardDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

import { useState } from 'react'

{/* Renderização de lista com componente */}
const cars = [
  {id: 1, barnd: "Ferrari", color: "Red", km: 20000},
  {id: 2, barnd: "KIA", color: "White", km: 30000},
  {id: 3, barnd: "Renault", color: "Blue", km: 10000},
]

function App() {

  // Função em Prop

  function showMessage() {
    alert("Event from father component!");
  }

  // State Lift
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
     <div className='app'>
      <h1 className='text-2xl'> Advancing in react </h1>
      
      {/* Importando imagens */}
      {/* <img src="./assets/img.jpg" alt="Image not found" /> */}
      <img src={imageExmple} alt="Image not found" />

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

      {/* Renderização de lista com componente */}

      {cars.map((car) => (
        <CardDetails key={car.id} brand={car.barnd} color={car.color} km={car.km} />
      ))}

      {/* Fragment */}
      <Fragment/>

      {/* Container - children props */}
      <Container>
        <h1 className='text-2xl font-light'> Example of content </h1>
      </Container>

      {/* Função em Prop */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
     </div>
    </>
  )
}

export default App;
