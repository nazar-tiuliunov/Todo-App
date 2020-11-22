import React, { Component } from 'react';
import Form from './Form';

export default class headerWrapper extends Component {
   render() {
      const prop = this.props;
      return (
         <header>
            <h1 className='todo__title'>Todo App</h1>
            <section className="todo__addTask">
               <div className="container addTask">
                  <Form text={prop.text}
                     tasks={prop.tasks}
                     addTask={prop.addTask.bind(this)}
                     updateValue={prop.updateValue.bind(this)} />
               </div>
            </section>
         </header>
      )
   }
}
