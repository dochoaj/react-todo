import React, { Component } from 'react';
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
        <TaskCreator />
        {this.renderBoards()}
      </div>
    );
  }

  renderBoards() {
    const { statuses, tasks } = this.state;

    return statuses.map(status => {
      return (
        <Board title={status}
               tasks={ tasks.filter( x => x.status === status) } />
      );
    });
  }
}

export default App;
