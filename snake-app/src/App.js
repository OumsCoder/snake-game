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

componentDidMount() {
  setInterval(() => {

    if(this.state.TOUCH==='RIGTH'){
      let y;
      let x;
      for (let i=0; i<this.state.positionSnake.length;i++) {
        y = this.state.positionSnake[i][0]
        x = this.state.positionSnake[i][1]
      }
      if(this.state.foodPosition[1]===x && this.state.foodPosition[0]===y){
        this.setState({
          foodPosition : this.generateFoodPosition(),
          positionSnake : [...this.state.positionSnake,
            [y,x+2]]  
        })
      }
      if(x===98){
        this.setState({
          win : false
        })
      }
      this.state.positionSnake.shift()
      this.setState({
        positionSnake : [...this.state.positionSnake,
        [y,x+2]]
      })
    }

    if(this.state.TOUCH==='UP'){
      let x;
      let y;
      for (let i=0; i<this.state.positionSnake.length;i++) {
        y = this.state.positionSnake[i][0]
        x = this.state.positionSnake[i][1]
      }
      if(this.state.foodPosition[1]===x && this.state.foodPosition[0]===y){
        this.setState({
          foodPosition : this.generateFoodPosition(),
          positionSnake : [...this.state.positionSnake,
            [y-2,x]]
        })
      }
      if(y===0){
        this.setState({
          win : false
        })
      }
      this.state.positionSnake.shift()
      this.setState({
        positionSnake : [...this.state.positionSnake,
        [y-2,x]]
      })
    }

    if(this.state.TOUCH==='LEFT'){
      let x;
      let y;
      for (let i=0; i<this.state.positionSnake.length;i++) {
        y = this.state.positionSnake[i][0]
        x = this.state.positionSnake[i][1]
      }
      if(this.state.foodPosition[1]===x && this.state.foodPosition[0]===y){
        this.setState({
          foodPosition : this.generateFoodPosition(),
          positionSnake : [...this.state.positionSnake,
            [y,x-2]]
        })
      }
      if(x===0){
        this.setState({
          win : false
        })
      }
      this.state.positionSnake.shift()
      this.setState({
        positionSnake : [...this.state.positionSnake,
        [y,x-2]]
      })
    }

    if(this.state.TOUCH==='DOWN'){
      let x;
      let y;
          for (let i=0; i<this.state.positionSnake.length;i++) {
            y = this.state.positionSnake[i][0]
            x = this.state.positionSnake[i][1]
          }
          if(this.state.foodPosition[1]===x && this.state.foodPosition[0]===y){
            this.setState({
              foodPosition : this.generateFoodPosition(),
              positionSnake : [...this.state.positionSnake,
                [y+2,x]]
            })
          }
          if(y===96){
            this.setState({
              win : false
            })
          }
      this.state.positionSnake.shift()
      this.setState({
        positionSnake : [...this.state.positionSnake,
        [y+2,x]]
      })
    }
  }, 150);
}

  // fx when you press up 
  pressUp = () =>{
    if(this.state.TOUCH==='DOWN'){
      return
    }

    this.setState({
      TOUCH : 'UP'
    })
  } 

  // fx when you press left 
  pressLeft = () =>{
    if(this.state.TOUCH==='RIGTH'){
      return
    }

    this.setState({
      TOUCH : 'LEFT'
    })
  } 

  // fx when you press down
  pressDown = () =>{
    if(this.state.TOUCH==='UP'){
      return
    }

    this.setState({
      TOUCH : 'DOWN'
    })
  } 

  // fx when you press rigth 
  pressRigth = () =>{
    if(this.state.TOUCH==='LEFT'){
      return
    }

    this.setState({
      TOUCH : 'RIGTH'
    })
  } 
  
  state ={
    win : true,
    TOUCH : 'RIGTH',
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

    const displayGame = this.state.win ? 
    (
      <div className="Game-container">
        <Snake position={this.state.positionSnake} /> 
        <Food  position={this.state.foodPosition} />
      </div>
    ) :
    (
      <div className="Game-container">
      <p className="lose">Oooops , you lose</p>
      </div>
    )

    return (
      displayGame
    )
  }
}

export default App;