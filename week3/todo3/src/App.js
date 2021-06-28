import './App.css';
import ToDo from './ToDoList';
import { items } from './store';
import React from "react";
//import { useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.dltBtn = this.dltBtn.bind(this);
  }

  dltBtn(){}
  render(){
    return (
      <div>
        <h1>Checklist</h1>
        <ToDo items = {items}/>
      </div>
    )
  }
}

export default App;
