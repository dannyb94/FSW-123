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
      value: "",
      editValue: "",
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

  editTodo = (e) => {
    console.log("this checkbox was checked", e.target)
    e.preventDefault()
    var newArray = this.state.items.map(item => {
      if(e.currentTarget.id === item.id){
        item.text = this.state.editValue
        // if(item.isCompleted === true){
        //   item.isCompleted = false
        //   return item
        // } else {
        //   item.isCompleted = true
        return item
        // }
      } else {
        return item
      }
    }) 
    console.log(newArray)
    this.setState({
      items: newArray
    })
  }


  handleChange = (e) => {
    var {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.value.length > 1){
      alert("You've created a new task! " + this.state.value)

      var newItem = {
        id: uuidv4(),
        text: this.state.value,
        isCompleted: false
      }
      this.setState({value: "", items: [...this.state.items, newItem]})
    } else {
      alert("No text was entered.")
    }
  }


//try using find for the delete button
  dltBtn = (id) => {
    console.log("this item was deleted")

    let dltd = [...this.state.items];
    // let location = dltd.indexOf(this)
    // this.parentNode.removeChild(this)
    let location = dltd.findIndex(item => item.id === id);
    // for(var i = 0; i < items.length; i++){
    //   if(items[i] === 1){
    //     items.splice(i, 1)
    //   } else {
    //     return items
    //   }
    // }
    dltd.splice(location, 1)
    this.setState({
      items: dltd
    })

  }

  render(){
    return (
      <div>
        <h1>Checklist</h1>

        <form className="enterNew"  onSubmit={this.handleSubmit}>
          <label> New List Item:
            <input className="sub" type="text"  value={this.state.value}  name="value"  onChange={this.handleChange} />
          </label>
          <input className="sub"  id="special"  type="submit"  value="Submit" />
        </form>

        <ToDo items = {this.state.items}  handleChange = {this.handleChange}  value = {this.state.editValue} 
         toggleComplete = {this.toggleComplete}  editTodo = {this.editTodo}  dltBtn = {this.dltBtn}/>
      </div>
    )
  }
}

export default App;
