import React, { Component } from 'react';
import Task from "./Task";

export default class NewTaskWrapper extends Component {
   render() {
      const { tasks, filter, removeTask, checkboxHandler } = this.props;
      return (
         <section className='todo__newTasks'>
            <div className="container newTasks">
               {tasks.filter(item => {
                  switch (filter) {
                     case 'Active':
                        return item.completed === false;
                     case 'Completed':
                        return item.completed === true;
                     default:
                        return item;
                  }
               }).map(item => {
                  const id = tasks.indexOf(item); // get index of element in tasks array before filtering
                  return <Task key={id} {...{ item, id, removeTask, checkboxHandler }} />
               })}
            </div>
         </section>
      )
   }
}
