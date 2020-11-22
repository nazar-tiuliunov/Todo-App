import React, { Component } from 'react';

export default class Task extends Component {
   render() {
      return (
         <div className='todo__task'>
            <input className='todo__task_complete'
               type='checkbox'
               checked={this.props.item.completed}
               onChange={() => { this.props.checkboxHandler(this.props.index) }}
            />
            <p className='todo__task_text' >{this.props.item.text}</p>
            <span className='todo__task_delete' onClick={() => { this.props.removeTask(this.props.index) }} >&#10006;</span>
         </div>
      )
   }
}