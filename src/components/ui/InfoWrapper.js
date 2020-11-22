import React, { Component } from 'react'

export default class InfoWrapper extends Component {
   render() {
      const { tasks, completeAllTasks, isChecked } = this.props;
      const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';
      const tasksRemain = `${tasks.length} ${tasksNoun} remaining`;

      return (
         <section className='todo__info'>
            <div className='container info'>
               <input type='checkbox' checked={isChecked} onChange={() => { completeAllTasks() }} />
               <span className='todo__info_text'>Check All</span>
               <span className='todo__info_text'>{tasksRemain}</span>
            </div>
         </section>
      )
   }
}
