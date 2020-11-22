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
                  <Form {...this.props} />
               </div>
            </section>
         </header>
      )
   }
}
