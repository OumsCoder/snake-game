import React, { Component } from 'react';
import './App.css';
import Snake from './Component/Snake/Snake'
import Food from './Component/Food/Food'

class App extends Component {

  // fx when you press up 
  pressUp = () =>{
    console.log(this.state.TOUCH)
    if(this.state.TOUCH==='DOWN'){
      console.log('entrain de se diriger vers le bas')
      return
    }
    let x;
    let y;
    let i;
    let test;
        for (i=0; i<this.state.positionSnake.length;i++) {
          y = this.state.positionSnake[i][0]
          x = this.state.positionSnake[i][1]
        }

      this.state.positionSnake.shift()
      this.setState({
      positionSnake : [...this.state.positionSnake,
      [y-12,x]]
    })
    this.setState({
      TOUCH : 'UP'
    })
     console.log(this.state.positionSnake)
  } 

  // fx when you press left 
  pressLeft = () =>{
    console.log(this.state.TOUCH)
    if(this.state.TOUCH==='RIGTH'){
      console.log('entrain de se diriger vers la droite')
      return
    }
    let x;
    let y;
        for (let i=0; i<this.state.positionSnake.length;i++) {
          y = this.state.positionSnake[i][0]
          x = this.state.positionSnake[i][1]
        }
    this.state.positionSnake.shift()
    this.setState({
      positionSnake : [...this.state.positionSnake,
      [y,x-2]]
    })
    this.setState({
      TOUCH : 'LEFT'
    })
    console.log(this.state.positionSnake)
  } 

  // fx when you press down
  pressDown = () =>{
    console.log(this.state.TOUCH)
    if(this.state.TOUCH==='UP'){
      console.log('entrain de se diriger vers le haut')
      return
    }
    let x;
    let y;
        for (let i=0; i<this.state.positionSnake.length;i++) {
          y = this.state.positionSnake[i][0]
          x = this.state.positionSnake[i][1]
        }
    this.state.positionSnake.shift()
    this.setState({
      positionSnake : [...this.state.positionSnake,
      [y+12,x]]
    })
    this.setState({
      TOUCH : 'DOWN'
    })
    console.log(this.state.positionSnake)
  } 

  // fx when you press rigth 
  pressRigth = () =>{
    console.log(this.state.TOUCH)
    if(this.state.TOUCH==='LEFT'){
      console.log('entrain de se diriger vers le gauche')
      return
    }
    let x;
    let y;
        for (let i=0; i<this.state.positionSnake.length;i++) {
          y = this.state.positionSnake[i][0]
          x = this.state.positionSnake[i][1]
        }
    this.state.positionSnake.shift()
    this.setState({
      positionSnake : [...this.state.positionSnake,
      [y,x+2]]
    })
    this.setState({
      TOUCH : 'RIGTH'
    })
    console.log(this.state.positionSnake)
  } 
  
  generateFoodPosition(){
  let min = 1;
  let max = 97;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  
  return [x,y]
  }

  state ={
    TOUCH : '',
    foodPosition : this.generateFoodPosition(),
    positionSnake : [
      [0,0],
      [0,2],
      [0,4]
    ]
  }
  render(){

    document.body.onkeydown = (e) =>{
      if(e.keyCode===38){
        this.pressUp()
      }
      if(e.keyCode===39){
        this.pressRigth()
      }

      if(e.keyCode===40){
        this.pressDown()
      }
      if(e.keyCode===37){
        this.pressLeft()
      }
    }

    return (
      <div className="Game-container">
        <Snake position={this.state.positionSnake} /> 
        <Food  position={this.state.foodPosition} />
      </div>
    );
  }
}

export default App;
