import React, { Component } from 'react';
import BoardFilterOption from './BoardFilterOption';

class BoardFilter extends Component {
  render() {
    return (
      <ul className='Board-filter'>
        {this.renderOptions()}
      </ul>
    );
  }

  renderOptions() {
    return this.props.availableBoards.map(board => {
      return this.renderOption(board);
    }, this);
  }

  renderOption(option) {
    const isActive = this.props.current === option;

    return (
      <BoardFilterOption key={option}
                         name={option}
                         active={isActive}
                         onSelect={this.props.onFilterSelect} />
    );
  }
}

export default BoardFilter;