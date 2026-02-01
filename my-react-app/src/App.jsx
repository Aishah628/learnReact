
import './App.css'
import React from 'react'
import Card from './card';



function App() {
 
  return (
    <>
    <h1>App Component</h1>
      <h1>End of App Component</h1>
      <Card name="Alice" age={25} />
      <Card name="Bob" />
      <Card age={30} />
     

    </>
  )
}

export default App
