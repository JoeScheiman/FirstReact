import React, { Component } from 'react';


export default class Decrementer extends Component {
  render() {
      const {decrement} = this.props;
    return (
      <button onClick={decrement} >--</button>
    );
  }
}

