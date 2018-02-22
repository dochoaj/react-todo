import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className='Task'>
        <div className='Description'>
          {this.props.description}
        </div>
        <div className='Actions'>
          <button onClick={this.onRemoveButtonClick}>
            remove
          </button>
        </div>
      </div>
    );
  }

  onRemoveButtonClick = (event) => {
    event.preventDefault();
    this.props.onRemove(this.props.id);
  }
}

export default Task;