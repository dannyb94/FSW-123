import './App.css';
import ToDo from './components/ToDoList';
//import { items } from './components/store';
import React from "react";
//import { v4 as uuidv4 } from 'uuid';
import UserProvider from './components/ToDoList'; 

class App extends React.Component {
  
  render(){
    return (
      <div>
        <h1>Checklist</h1>
        <ToDo />
      </div>
    )
  }
}

export default App;
