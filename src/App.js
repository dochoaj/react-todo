import React, { Component } from 'react';
import uid from 'uid';
import Board from './Board';
import TaskCreator from './TaskCreator';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      { id: 1, description: 'The first', status: 'pending' },
      { id: 2, description: 'The second', status: 'pending' },
      { id: 3, description: 'The third', status: 'completed' }
    ],
    statuses: [ 'pending', 'completed' ]
  }

  render() {
    return (
      <div className='App'>
        <TaskCreator onTaskAddition={this.onTaskAddition} />
        {this.renderBoards()}
      </div>
    );
  }

  renderBoards() {
    const { statuses, tasks } = this.state;

    return statuses.map(status => {
      return (
        <Board key={status}
               onTaskRemove={this.onTaskRemove}
               title={status}
               tasks={ tasks.filter( x => x.status === status) } />
      );
    });
  }

  generateTask(description) {
    return {
      id: uid(),
      description,
      status: this.firstTaskStatus()
    };
  }

  firstTaskStatus() {
    return this.state.statuses[0]
  }

  onTaskAddition = (taskDescription) => {
    const task = this.generateTask(taskDescription);
    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task]
      };
    });
  }

  onTaskRemove = (id) => {
    const index = this.state.tasks.findIndex(el => el.id === id)
    index >= 0 && this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((_, i) => i !== index)
      };
    });
  }
}

export default App;
