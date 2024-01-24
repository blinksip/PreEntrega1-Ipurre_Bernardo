import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'



const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer
      greeting = 'Bienvenidos a B&A Perfumería'
      />
    </div>
  )
}

export default App
