import React, { Component } from 'react'
import Task from "./Task";
import Form from './Form';
import Filter from './Filter';

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
      this.setState({ todos: [this.state.text, ...this.state.todos], text: '' });
   }
   removeItem(index) {
      this.setState({ todos: this.state.todos.filter((_, i) => i !== index) });
   }
   checkedAll() {
      this.setState({
         isChecked: !this.state.isChecked
      })
      const elements = document.querySelectorAll('.todo__task_complete');
      if (this.state.isChecked) {
         elements.forEach(item => item.setAttribute('checked', 'checked'));
      } else {
         elements.forEach(item => item.removeAttribute('checked'));
      }
   }
   handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         e.preventDefault()
      }
   };
   // setAttribute() {
   //    this.setState({
   //       isChecked: !this.state.isChecked
   //    })
   //    if (this.state.isChecked) {
   //       document.querySelector('.todo__task_complete').setAttribute('checked', 'checked');
   //    } else {
   //       document.querySelector('.todo__task_complete').removeAttribute('checked');
   //    }
   // }


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
                           setAttribute={this.setAttribute.bind(this)} />
                     })}
                  </div>
               </div>
               <div className='todo__checkAll'>
                  <div className='container checkAll'>
                     <input type='checkbox' onClick={this.checkedAll.bind(this)} />
                     <span className='todo__checkAll_text'>Check All</span>
                     <span className='todo__checkAll_text'>{this.state.todos.length} items left</span>
                  </div>
               </div>
               <div className='todo__filters'>
                  <div className='container filter'>
                     <Filter filter='All' />
                     <Filter filter='Active' />
                     <Filter filter='Completed' />
                     <button className='todo__filter'>Clear Completed</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
