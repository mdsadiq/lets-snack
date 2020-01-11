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
    const { count } = this.state;
    return (
      <div style={{ fontSize: 40 }}>
        <button onClick={this.increment}>
          +
        </button>
        {count}
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