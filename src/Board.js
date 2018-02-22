import React, { Component } from 'react';
import Task from './Task';

class Board extends Component {
  render() {
    return (
      <div className='Board'>
        <div className='Title'>
          {this.props.title}
        </div>
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
              onRemove={this.props.onTaskRemove}
              key={id}
              description={description}
              status={status} />
      );
    });
  }
}

export default Board;