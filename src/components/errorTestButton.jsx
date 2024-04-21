import React, { Component }from 'react';

class Counter extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { counter: 0 }; 
    this.handleClick = this.handleClick.bind(this); 
  } 
  
  handleClick() { 
    this.setState(({ counter }) => ({ 
      counter: counter + 1 
    })); 
  } 
  
  render() { 
    if (this.state.counter === 1) { 
  
      // Simulate a JS error 
      throw new Error('This Button Triggers The Error Boundary'); 
    } 
    return <button className='error-button' onClick={this.handleClick}>Trigger Error Boundary</button>;
  } 
}

export default Counter;
