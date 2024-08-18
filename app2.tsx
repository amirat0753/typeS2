// ``JS code
// import React, { Component } from 'react'; 
// class Counter extends Component { 
// state = {
//  count: 0
//  }; increment = () => {
//  this.setState({ count: this.state.count + 1 }); 
// }; 
// render() { 
// return 
// ( <div> 
// <p>Count: {this.state.count}</p> 
// <button onClick={this.increment}>Increment</button> 
// </div> );
//  }
//  } 
// export default Counter;

import React, { Component } from 'react';

// interface for the component's state
interface CounterState {
  count: number; // The `count` property
}

//Annotating the class component with types for `props` and `state`
class Counter extends Component<{}, CounterState> {
  //  Initializing the state with type `CounterState`
  state: CounterState = {
    count: 0, // Initial count value set to 0
  };

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 }); // Update state using setState
  };

  render() {
    return (
      <div>
        {/* Render the current count and a button to increment */}
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
