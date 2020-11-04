import React, { Component } from 'react'
import Task from "./Task";
import Form from './Form';
import Filter from './Filter';

export default class tasks extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tasks: [], // array of objects with task text and it value
         text: '', // text of task
         isChecked: true, // state of 'completeAllTasks' checkbox
      };
   };

   updateValue(e) {
      this.setState({ text: [e.target.value] });
   };
   addTask(e) {
      e.preventDefault();
      this.setState({
         tasks: [{ text: this.state.text.toString(), completed: false }, ...this.state.tasks],
         text: ''
      });
   };
   removeTask(index) {
      this.setState({ tasks: this.state.tasks.filter((_, id) => id !== index) });
   };
   checkHandler(index) {
      // state handler for task
      this.setState({
         tasks: this.state.tasks.map((item, id) => id === index ? { ...item, completed: !item.completed } : item)
      });
   };
   completeAllTasks() {
      this.setState({
         isChecked: !this.state.isChecked,
         tasks: this.state.tasks.map(item => this.state.isChecked ? { ...item, completed: true } : { ...item, completed: false })
      });
   };
   clearCompleted() {
      this.setState({
         tasks: this.state.tasks.filter(item => item.completed === false),
         isChecked: true
      });
   };
   handleKeyPress = (e) => {
      // Prevent line breaks
      if (e.key === 'Enter') e.preventDefault();
   };

   render() {
      return (
         <main className="todo">
            <div className="todo__flex">
               <h1 className='todo__title'>Todo App</h1>
               <section className="todo__addTask">
                  <div className="container addTask">
                     <Form text={this.state.text}
                        tasks={this.state.tasks}
                        addTask={this.addTask.bind(this)}
                        updateValue={this.updateValue.bind(this)} />
                  </div>
               </section>
               <section className='todo__newTasks'>
                  <div className="container newTasks">
                     {this.state.tasks.map((item, index) => {
                        return <Task item={item}
                           index={index}
                           key={index}
                           removeTask={this.removeTask.bind(this)}
                           handleKeyPress={this.handleKeyPress.bind(this)}
                           checkHandler={this.checkHandler.bind(this)} />
                     })}
                  </div>
               </section>
               <section className='todo__checkAll'>
                  <div className='container checkAll'>
                     <input type='checkbox' checked={!this.state.isChecked} onChange={this.completeAllTasks.bind(this)} />
                     <span className='todo__checkAll_text'>Check All</span>
                     <span className='todo__checkAll_text'>{this.state.tasks.length} items left</span>
                  </div>
               </section>
               <section className='todo__filters'>
                  <div className='container filter'>
                     <Filter content='All' />
                     <Filter content='Active' />
                     <Filter content='Completed' />
                     <button className='todo__filter' onClick={this.clearCompleted.bind(this)}>Clear Completed</button>
                  </div>
               </section>
            </div>
         </main>
      );
   }
}
