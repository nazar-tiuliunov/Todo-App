import React, { Component } from 'react'
import Tasks from "./Tasks";
import Completed from './Completed';
import Form from './Form'

export default class Todos extends Component {
   constructor(props) {
      super(props);
      this.state = { todos: [], text: '', completed: [] };
   }

   updateValue(e) {
      this.setState({ text: [e.target.value] });
   }
   addItem(e) {
      e.preventDefault();
      this.setState({ todos: [this.state.text, ...this.state.todos], text: '' });
   }
   removeItem(index) {
      this.setState({ todos: this.state.todos.filter((_, i) => i !== index) });
   }
   deleteItem(index) {
      this.setState({ completed: this.state.completed.filter((_, i) => i !== index) });
   }
   moveItem(index) {
      this.setState({
         completed: [this.state.todos.filter((_, i) => i === index), ...this.state.completed]
      });
      this.removeItem(index);
   }

   render() {
      return (
         <div className="todo">
            <div className="todo__flex">
               Tasks:
               <Tasks todos={this.state.todos} removeItem={this.removeItem.bind(this)} moveItem={this.moveItem.bind(this)} />
               <Form text={this.state.text} todos={this.state.todos} addItem={this.addItem.bind(this)} updateValue={this.updateValue.bind(this)} />
               Completed:
               <Completed completed={this.state.completed} deleteItem={this.deleteItem.bind(this)} />
            </div>
         </div>
      );
   }
}