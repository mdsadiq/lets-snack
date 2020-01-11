import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    //Notice how we are using accessing this.state.count
    return (
      <div style={{ fontSize: 40 }}>
        <button onClick={this.increment}>
          +
        </button>
        {this.state.count}
        <button onClick={this.decrement}>
          -
        </button>
        <p> 
          {/* task1 */}  
        </p>
      </div>
    );
  }
}

export default Counter;

// apply []
// call()
//----------
// bind returns a function
// onClick={this.decrement.bind(this)}

// task1
    // Counter two times : { this.state * 2}