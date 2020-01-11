import React, { Component } from 'react'



export default class Hello extends Component {
  state = {
    name: '-',
    centername: 'jsfactory',
    level: 'two'
  }

  showAlert = () =>{
    alert('function executed by sadiq')
  }
 
  selectSadiq =() =>{ 
    this.setState({ name: 'sadiq'})
  }
  selectRahul =() =>{ 
    this.setState({ name: 'Rahul'})
  }
  selectOther =() =>{ 
    this.setState({ name: 'Other User'})
  }

  render(){
    return(
      <div> 
        <h2>Hello my name is {this.state.name} </h2>
        <h3>we are in {this.state.centername}</h3>
        <h3>we are learning level {this.state.level}</h3>


        <button onClick={this.showAlert}>click me</button>
        <br />
        <button onClick={this.selectSadiq}>Select Sadiq</button>
        <button onClick={this.selectRahul}>Select Rahul</button>
        <button onClick={this.selectOther}>Select Other</button>
      </div>
    )
  }
  
}