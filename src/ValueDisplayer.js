import React, { Component } from 'react';

export default class ValueDisplayer extends Component {
  render() {
      const {currentValue} = this.props;
    return (
      <span>
        {currentValue}
      </span>
    );
  }
}

