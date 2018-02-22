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
        <button onClick={this.onAddButtonClick}>
          Add
        </button>
      </div>
    );
  }

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState({ description });
  }

  onAddButtonClick = (event) => {
    const { description } = this.state;
    this.state.description.trim() !== '' && this.props.onTaskAddition(description)
  }
}

export default TaskCreator;