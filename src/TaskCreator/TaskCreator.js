import React, { Component } from 'react';
import './TaskCreator.css';

class TaskCreator extends Component {
  state = {
    description: ''
  }

  render() {
    return (
      <div className='Task-creator'>
        <input type='text'
               placeholder='What do you need to do?'
               value={ this.state.description }
               onChange= {this.onDescriptionChange} />
        <button onClick={this.onAddButtonClick}>
          +
        </button>
      </div>
    );
  }

  beforeCreateTask(description) {
    this.setState({ description: '' })
    this.props.onTaskAddition(description)
  }

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState({ description });
  }

  onAddButtonClick = (event) => {
    const { description } = this.state;
    this.state.description.trim() !== '' && this.beforeCreateTask(description)
  }
}

export default TaskCreator;