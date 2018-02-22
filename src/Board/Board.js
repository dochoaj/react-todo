import React, { Component } from 'react';
import Task from '../Task/Task';
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className='Board'>
        <div className='Content'>
          {this.renderTasks()}
        </div>
      </div>
    );
  }

  renderTasks() {
    return this.props.tasks.map(task => {
      const { id, description, status } = task;

      return (
        <Task id={id}
              availableBoards={this.props.availableBoards}
              onStatusChange={this.props.onTaskStatusChange}
              onRemove={this.props.onTaskRemove}
              key={id}
              description={description}
              status={status} />
      );
    });
  }
}

export default Board;