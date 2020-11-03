import React, { Component } from 'react';

export default class Task extends Component {
   render() {
      return (
         <div className='todo__task'>
            <input onChange={() => { this.props.checkHandler(this.props.index) }} className='todo__task_complete' type='checkbox' checked={this.props.todo[1]} />
            <span onKeyPress={this.props.handleKeyPress} className='todo__task_text'>{this.props.todo[0]}</span>
            <span onClick={() => { this.props.removeItem(this.props.index) }} className='todo__task_delete'>&#10006;</span>
         </div>
      )
   }
}