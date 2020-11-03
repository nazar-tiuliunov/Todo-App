import React, { Component } from 'react'
import Task from "./Task";
import Form from './Form';

export default class Todos extends Component {
   constructor(props) {
      super(props);
      this.state = {
         todos: [],
         text: '',
         isChecked: true,
      };
   }

   updateValue(e) {
      this.setState({ text: [e.target.value] });
   }
   addItem(e) {
      e.preventDefault();
      this.setState({ todos: [[this.state.text.toString(), false], ...this.state.todos], text: '' });
   }
   removeItem(index) {
      this.setState({ todos: this.state.todos.filter((_, i) => i !== index) });
   }
   checkAll() {
      this.setState({
         isChecked: !this.state.isChecked,
         todos: this.state.isChecked ? this.state.todos.map(item => [item[0], item[1] = true]) : this.state.todos.map(item => [item[0], item[1] = false])
      });
   }
   checkHandler(index) {
      this.setState({
         todos: this.state.todos.map((item, i) => {
            if (i === index) {
               item[1] = !item[1]
            }
            return item
         })
      })
      console.log(`changen,${index}, ${this.state.todos}`)
   }
   clearCompleted() {
      this.setState({
         todos: this.state.todos.filter(item => item[1] === false),
         isChecked: !this.state.isChecked
      });
   }
   handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault()
      }
   };

   render() {
      return (
         <div className="todo">
            <div className="todo__flex">
               <h1 className='todo__title'>Todo App</h1>
               <div className="todo__addTask">
                  <div className="container addTask">
                     <Form text={this.state.text} todos={this.state.todos} addItem={this.addItem.bind(this)} updateValue={this.updateValue.bind(this)} />
                  </div>
               </div>
               <div className='todo__newTasks'>
                  <div className="container newTasks">
                     {this.state.todos.map((todo, index) => {
                        return <Task todo={todo}
                           index={index}
                           removeItem={this.removeItem.bind(this)}
                           handleKeyPress={this.handleKeyPress.bind(this)}
                           checkHandler={this.checkHandler.bind(this)}
                           key={index} />
                     })}
                  </div>
               </div>
               <div className='todo__checkAll'>
                  <div className='container checkAll'>
                     <input type='checkbox' onClick={this.checkAll.bind(this)} checked={!this.state.isChecked} />
                     <span className='todo__checkAll_text'>Check All</span>
                     <span className='todo__checkAll_text'>{this.state.todos.length} items left</span>
                  </div>
               </div>
               <div className='todo__filters'>
                  <div className='container filter'>
                     <button className='todo__filter' >All</button>
                     <button className='todo__filter' >Active</button>
                     <button className='todo__filter' >Completed</button>
                     <button onClick={this.clearCompleted.bind(this)} className='todo__filter'>Clear Completed</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
