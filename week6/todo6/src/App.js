import './App.css';
import ToDo from './components/ToDoList';
//import { items } from './components/store';
import React from "react";
//import { v4 as uuidv4 } from 'uuid';
import UserProvider from './context'; 

class App extends React.Component {
  
  render(){
    return (
      <div>
        <UserProvider> <ToDo /> </UserProvider>
      </div>
    )
  }
}

export default App;
