import React, { Component } from 'react';
import './BoardFilterOption.css';

class BoardFilterOption extends Component {
  render() {
    const className = this.props.active ? 'Selected' : 'Not-selected';
    return (
      <li className={className} onClick={this.onOptionClick}>{this.props.name}</li>
    );
  }

  onOptionClick = (event) => {
    this.props.onSelect(this.props.name);
  }
}

export default BoardFilterOption;