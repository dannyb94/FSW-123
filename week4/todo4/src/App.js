import './App.css';
import ToDo from './ToDoList';
import { items } from './store';
import React from "react";
//import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: items
    }
    this.dltBtn = this.dltBtn.bind(this);
  }

  toggleComplete = (e) => {
    console.log("this checkbox was checked", e.target)
    var newArray = this.state.items.map(item => {
      if(e.target.id === item.id){
        if(item.isCompleted === true){
          item.isCompleted = false
          return item
        } else {
          item.isCompleted = true
          return item
        }
      } else {
        return item
      }
    }) 
    console.log(newArray)
    this.setState({
      items: newArray
    })
  }

  //addToDo = (e) => {
    handleChange = (e) => {
      this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
      e.preventDefault()
      if(this.state.value.length > 1){
        alert("You've created a new task! " + this.state.value)

        var newItem = {
          id: uuidv4(),
          text: "",
          isCompleted: false
        }
        this.setState({value: "", items: [...this.state.items, newItem]})
      } else {
        alert("No text was entered.")
      }
    }
  //}

//try using find for the delete button
  dltBtn = (e) => {
    console.log("this item was deleted")
    //if(e){
      let dltd = [...this.state.items];
      let index = dltd.findIndex(item => item.id === e);
      dltd.splice(index, 1)
      this.setState({
        items: dltd
      })
    //}
  }

  render(){
    return (
      <div>
        <h1>Checklist</h1>

        <form className="enterNew"  onSubmit={this.handleSubmit}>
          <label> Task:
            <input type="text"  value={this.state.value}  onChange={this.handleChange} />
          </label>
          <input className="sub"  type="submit"  value="Submit" />
        </form>

        <ToDo items = {this.state.items}  toggleComplete = {this.toggleComplete}  dltBtn = {this.dltBtn}/>
      </div>
    )
  }
}

export default App;
