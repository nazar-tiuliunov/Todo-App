import React, { Component } from 'react';

export default class Task extends Component {
   render() {
      return (
         <div className='todo__task'>
            <input className='todo__task_complete' type='checkbox' onClick={this.props.setAttribute} />
            <span onKeyPress={this.props.handleKeyPress} contentEditable='true' className='todo__task_text' key={this.props.todo}>{this.props.todo}</span>
            <span onClick={(e) => { this.props.removeItem(this.props.index) }} className='todo__task_delete'>&#10006;</span>
         </div>
      )
   }
}