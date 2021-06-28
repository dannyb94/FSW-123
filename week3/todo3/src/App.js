import './App.css';
import ToDo from './ToDoList';
import { items } from './store';
//import { useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

function App() {

  // const [dltBtn, setDltBtn] = useState('Delete');
  // const byeBye = () => {
  //   setDltBtn('X')
  // }

  // dltListed = (e) => {
  //   let deleted = [...this.state.aryTodos];
  //   let index = deleted.findIndex(item => item.id === e);
  //   deleted.splice(index, 1)
  //   this.setState({
  //     aryTodos: deleted
  //   })
  // }

  // render(){
  //   const todoCards = this.state.aryTodos.map((item, index) => {
  //     return (
  //       <ToDo
  //         key = {item.key}
  //         id = {item.id}
  //         text = {item.text}
  //         isCompleted = {item.isCompleted}
  //         deleteListed = {this.deleteListed}
  //       />
  //     )
  //   })
  // }
  const dltBtn = <button onCLick = {dltListed}>X</button>

  return (
    <div>
      <h1>Checklist</h1>
      <ToDo items = {items}/>
    </div>
  )
}

export default App;
