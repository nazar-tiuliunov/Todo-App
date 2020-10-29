import React, { Component } from 'react'

export default class Form extends Component {
   render() {
      return (
         <div className='todo__addTask'>
            <div className="container">
               <form onSubmit={(e) => { this.props.addItem(e) }} className="todo__form">
                  <input className="todo__form_enterTask" type="text" required placeholder="Enter new task" value={this.props.text} onChange={(e) => { this.props.updateValue(e) }} />
                  <button className="todo__form_addTask" type="submit">Add Task</button>
               </form>
            </div>
         </div>
      )
   }
}
