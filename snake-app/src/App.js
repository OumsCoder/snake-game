import React, { Component } from 'react';
import './App.css';
import Snake from './Component/Snake/Snake'
import Food from './Component/Food/Food'

class App extends Component {

  generateFoodPosition(){
  let min = 1;
  let max = 97;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  
  return [x,y]
  }

  state ={
    foodPosition : this.generateFoodPosition(),
    positionSnake : [
      [0,0],
      [0,2],
      [0,4]
    ]
  }
  render(){
    return (
      <div className="Game-container">
        <Snake position={this.state.positionSnake} /> 
        <Food  position={this.state.foodPosition} />
      </div>
    );
  }
}

export default App;
