import './App.css';
import React from 'react';
import Die from './Die'

class App extends React.Component {
  constructor(){
      super()
      this.state = {
        cubed1: 0,
        cubed2: 0
      }
      this.rollEm = this.rollEm.bind(this)
  }

  rollEm(){
    var c1 = this.state.cubed1
    var c2 = this.state.cubed2
    c1 = Math.floor(Math.random() * 6)
    c2 = Math.floor(Math.random() * 6)
    this.setState(prevState => {
      return {
        cubed1: c1,
        cubed2: c2
      }
    })
  }

  render(){
    return (
      <div>
        <Die cube = {this.state.cubed1}/>
        <Die cube = {this.state.cubed2}/>
        <br/>
        <button onClick={this.rollEm} id='clickety'>Roll 'Em</button>
      </div>
    )
  }
}

export default App; 