import React, { Component } from 'react'

export default class Form extends Component {
   render() {
      return (
         <form className="todo__form" onSubmit={(e) => { this.props.addTask(e) }}>
            <input className="todo__form_enterTask"
               type="text"
               required
               placeholder="Enter new task"
               value={this.props.text}
               onChange={(e) => { this.props.updateValue(e) }} />
         </form>
      )
   }
}