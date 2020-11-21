import React, { Component } from 'react';
import Task from "./Task";

export default class NewTaskWrapper extends Component {
   render() {
      const prop = this.props;
      return (
         <section className='todo__newTasks'>
            <div className="container newTasks">
               {prop.tasks.filter(item => {
                  switch (prop.filter) {
                     case 'Active':
                        return item.completed === false;
                     case 'Completed':
                        return item.completed === true;
                     default:
                        return item
                  }
               }).map((item, index) => {
                  return <Task item={item}
                     index={prop.tasks.indexOf(item)}
                     key={index}
                     removeTask={prop.removeTask.bind(this)}
                     checkboxHandler={prop.checkboxHandler.bind(this)} />
               })}
            </div>
         </section>
      )
   }
}
