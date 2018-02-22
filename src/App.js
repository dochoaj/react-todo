import React, { Component } from 'react';
import Board from './Board';
import TaskCreator from './TaskCreator';
import './App.css';

const tasks = [
  { id: 1, description: 'The first', status: 'pending' },
  { id: 2, description: 'The second', status: 'pending' },
  { id: 3, description: 'The third', status: 'completed' }
];

const statuses = [ 'pending', 'completed' ];

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TaskCreator />
        {this.renderBoards()}
      </div>
    );
  }

  renderBoards() {
    return statuses.map(status => {
      return (
        <Board title={status}
               tasks={ tasks.filter( x => x.status === status) } />
      );
    });
  }
}

export default App;
