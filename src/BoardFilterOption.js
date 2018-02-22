import React, { Component } from 'react';

class BoardFilterOption extends Component {
  render() {
    const className = `Board-filter-option ${this.props.active && 'active'}`;
    return (
      <li className={className} onClick={this.onOptionClick}>{this.props.name}</li>
    );
  }

  onOptionClick = (event) => {
    this.props.onSelect(this.props.name);
  }
}

export default BoardFilterOption;