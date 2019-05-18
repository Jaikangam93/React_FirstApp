import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

import './App.css';

class App extends Component {
  state ={
    ninjas : [
      { name: 'Madan', age: 21, belt: 'Yellow', id:1 },
      { name: 'Angam', age: 26, belt: 'black', id:2 },
      { name: 'Philip', age: 32, belt: 'Red', id:3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !=id
    });
    this.setState({
      ninjas:ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Welocome to React JS </h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/> 
        <AddNinja addNinja={this.addNinja}/> 
      </div>
    );
  }
}
export default App;

