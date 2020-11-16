import React, { Component } from 'react';
import Task from "./Task";

export default class NewTaskWrapper extends Component {
   render() {
      const prop = this.props;
      return (
         <section className='todo__newTasks'>
            <div className="container newTasks">
               {prop.tasks.map((item, index) => {
                  return <Task item={item}
                     index={index}
                     key={index}
                     removeTask={prop.removeTask.bind(this)}
                     handleKeyPress={prop.handleKeyPress.bind(this)}
                     checkHandler={prop.checkHandler.bind(this)} />
               })}
            </div>
         </section>
      )
   }
}
