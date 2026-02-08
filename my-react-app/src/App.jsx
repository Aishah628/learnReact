
import './App.css'
import React from 'react'
import Card from './card.jsx';
import List from './list.jsx';
import Button from './button.jsx';
import Header from "./header.jsx";
import Component from './lists.jsx';
import ToDoList from './toDoList.jsx';
import ColorPicker from "./colorPicker.jsx";


function App() {
 
  return (
    <>
  {/* 
    <h1>App Component</h1>
      <h1>End of App Component</h1>
      <Card/>
      <List/>
      <Button/>
      <Header/>
      <Component/>
     */}

      
      <ToDoList/>
      <ColorPicker/>
     

    </>
  )
}

export default App
