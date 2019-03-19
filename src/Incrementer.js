import React, { Component } from 'react'

export default class Incrementer extends Component {
  render() {
      const {increment} = this.props;
    return (
      <button onClick={increment}>++</button>
    )
  }
}
