import React, { Component } from 'react';
import Form from './Form';

export default class HeaderWrapper extends Component {
   render() {
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
