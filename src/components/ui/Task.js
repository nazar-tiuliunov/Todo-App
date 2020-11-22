import React, { Component } from 'react';

export default class Task extends Component {
   render() {
      const { item, id, removeTask, checkboxHandler } = this.props;
      return (
         <div className='todo__task'>
            <input className='todo__task_complete'
               type='checkbox'
               checked={item.completed}
               onChange={() => { checkboxHandler(id) }}
            />
            <p className='todo__task_text' >{item.text}</p>
            <span className='todo__task_delete' onClick={() => { removeTask(id) }} >&#10006;</span>
         </div>
      )
   }
}