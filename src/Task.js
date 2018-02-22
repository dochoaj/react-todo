import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className='Task'>
        <div className='Description'>
          {this.props.description}
        </div>
        <div className='Actions'>
          <a href='#'>remove</a>
        </div>
      </div>
    );
  }
}

export default Task;