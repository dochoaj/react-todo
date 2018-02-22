import React, { Component } from 'react';
import uid from 'uid';
import Board from '../Board/Board';
import BoardFilter from '../BoardFilter/BoardFilter';
import TaskCreator from '../TaskCreator/TaskCreator';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      { id: 1, description: 'The first', status: 'pending' },
      { id: 2, description: 'The second', status: 'pending' },
      { id: 3, description: 'The third', status: 'completed' }
    ],
    statuses: [ 'pending', 'completed' ],
    currentFilter: 'all',
    pilots: 'Loading...'
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships/?search=Millennium%20Falcon&format=json')
      .then(raw => {
        return raw.json();
      })
      .then(response => {
        return fetch(`${response.results[0].url}?format=json`)
          .then(raw => {
            return raw.json();
          })
          .then(response => {
            let promises = response.pilots.map(url => fetch(`${url}?format=json`).then(x => x.json()));
            Promise.all(promises).then(results => {
              const pilots = results.map(x => x.name).join(', ')
              this.setState({ pilots });
            });
          });
      });
  }

  render() {
    return (
      <div className='App'>
        <div className='main'>
          <TaskCreator onTaskAddition={this.onTaskAddition} />
          <BoardFilter current={this.state.currentFilter}
                      onFilterSelect={this.onFilterSelect}
                      availableBoards={['all', ...this.state.statuses]} />
          <div className='Board-container'>
            {this.renderBoards()}
          </div>
        </div>
        <div className='Luke-is-not-dead'>
          Millenium Falcon pilots: {this.state.pilots}
        </div>
      </div>
    );
  }

  renderBoards() {
    const { statuses, tasks, currentFilter } = this.state;
    let filteredStatuses = statuses;

    if (currentFilter !== 'all') {
      filteredStatuses = statuses.filter(x => x === currentFilter)
    }

    return filteredStatuses.map(status => {
      return (
        <Board key={status}
               availableBoards={statuses}
               onTaskStatusChange={this.onTaskStatusChange}
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
    const index = this.state.tasks.findIndex(el => el.id === id);
    index >= 0 && this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((_, i) => i !== index)
      };
    });
  }

  onTaskStatusChange = (id, newStatus) => {
    const index = this.state.tasks.findIndex(el => el.id === id);
    index >= 0 && this.setState((prevState) => {
      // New status task is always treat as a new task, this is done to improve UX. If
      // I move a task I expect that task new location is always the last in each status list.
      const task = prevState.tasks[index];
      task.status = newStatus;
      const tasks = [...prevState.tasks.filter((_, i) => i !== index), task];
      return { tasks };
    });
  }

  onFilterSelect = (currentFilter) => {
    this.setState({ currentFilter });
  }
}

export default App;
