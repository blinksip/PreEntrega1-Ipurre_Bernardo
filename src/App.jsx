import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'



const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer
      greeting = 'Bienvenidos a la Web'
      />
    </div>
  )
}

export default App
