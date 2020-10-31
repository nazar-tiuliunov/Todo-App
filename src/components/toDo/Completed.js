import React, { Component } from 'react'

export default class Completed extends Component {
   render() {
      return (
         <ul>
            {this.props.completed.map((todo, index) => {
               return (
                  <li className='todo__tasks_task completed' key={todo}>
                     {todo}
                     <button onClick={(e) => { this.props.deleteItem(index) }} className='todo__tasks deleteTask'>Delete</button>
                  </li>
               )
            })}
         </ul>
      )
   }
}
