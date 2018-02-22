import React, { Component } from 'react';

class Task extends Component {
  render() {
    const { description, status } = this.props;

    return (
      <div className='Task'>
        <div className='Description'>
          {description}
        </div>
        <div className='Actions'>
          <button onClick={this.onRemoveButtonClick}>
            remove
          </button>
          <select value={status} onChange={this.onTaskStatusChange}>
            <option value='none' disabled>Move to...</option>
            {this.renderOptions()}
          </select>
        </div>
      </div>
    );
  }

  renderOptions() {
    return this.props.availableBoards.map(board => {
      return (
        <option key={board} value={board}>{board}</option>
      );
    });
  }

  onRemoveButtonClick = (event) => {
    event.preventDefault();
    this.props.onRemove(this.props.id);
  }

  onTaskStatusChange = (event) => {
    this.props.onStatusChange(this.props.id, event.target.value);
  }
}

export default Task;