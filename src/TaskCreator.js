import React, { Component } from 'react';

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
        <button>Add</button>
      </div>
    );
  }

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState({ description });
  }
}

export default TaskCreator;