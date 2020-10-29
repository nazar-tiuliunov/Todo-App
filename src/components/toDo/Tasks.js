import React, { Component } from 'react';

export default class Tasks extends Component {
   render() {
      return (
         <div className='todo__newTasks'>
            <div className="container">
               <ul className='todo__tasks'>
                  {this.props.todos.map((todo, index) => {
                     return (
                        <li className='todo__tasks_task' key={todo}>
                           {todo}
                           <button onClick={(e) => { this.props.removeItem(index) }} className='todo__tasks deleteTask'>Delete</button>
                           <button onClick={(e) => { this.props.moveItem(index) }} className='todo__tasks moveTask'>Complete</button>
                        </li>
                     )
                  })}
               </ul>
            </div>
         </div>
      );
   }
}