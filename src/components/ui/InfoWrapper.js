import React, { Component } from 'react'

export default class InfoWrapper extends Component {
   render() {
      const prop = this.props;
      const tasksNoun = prop.tasks.length !== 1 ? 'tasks' : 'task';
      const tasksRemain = `${prop.tasks.length} ${tasksNoun} remaining`;
      return (
         <section className='todo__info'>
            <div className='container info'>
               <input type='checkbox' checked={prop.isChecked} onChange={() => { prop.completeAllTasks() }} />
               <span className='todo__info_text'>Check All</span>
               <span className='todo__info_text'>{tasksRemain}</span>
            </div>
         </section>
      )
   }
}
