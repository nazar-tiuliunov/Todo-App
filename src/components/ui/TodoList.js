import React, { Component } from 'react';
import HeaderWrapper from './HeaderWrapper';
import NewTaskWrapper from './NewTaskWrapper';
import InfoWrapper from './InfoWrapper'
import FiltersWrapper from './FiltersWrapper';

export default class tasks extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tasks: [],
         text: '', // text of task
         isChecked: true, // state of 'completeAllTasks' checkbox
         filterValue: 'All'
      };
   };

   updateValue(e) { this.setState({ text: e.target.value }) };

   addTask(e) {
      e.preventDefault();
      this.setState({
         tasks: [{ text: this.state.text, completed: false }, ...this.state.tasks],
         text: ''
      });
   };

   removeTask(index) {
      this.setState({ tasks: this.state.tasks.filter((_, id) => id !== index) });
   };

   checkboxHandler(index) {
      this.setState({
         tasks: this.state.tasks.map((item, id) => id === index ? { ...item, completed: !item.completed } : item)
      });
   };

   filterHandler(event) {
      this.setState({ filterValue: event.target.value });
   }

   completeAllTasks() {
      this.setState({
         isChecked: !this.state.isChecked,
         tasks: this.state.tasks.map(item => this.state.isChecked ? { ...item, completed: true } : { ...item, completed: false })
      });
   };

   clearCompleted(e) {
      e.preventDefault();
      this.setState({
         tasks: this.state.tasks.filter(item => item.completed === false),
         isChecked: true
      });
   };

   render() {
      const { text, tasks, filterValue, isChecked } = this.state;
      const { updateValue, addTask, removeTask, checkboxHandler, filterHandler, completeAllTasks, clearCompleted } = this;

      return (
         <main className="todo">
            <div className="todo__flex">
               <HeaderWrapper
                  text={text}
                  tasks={tasks}
                  addTask={addTask.bind(this)}
                  updateValue={updateValue.bind(this)}
               />
               <NewTaskWrapper
                  tasks={tasks}
                  filter={filterValue}
                  removeTask={removeTask.bind(this)}
                  checkboxHandler={checkboxHandler.bind(this)}
               />
               <InfoWrapper
                  isChecked={!isChecked}
                  tasks={tasks}
                  completeAllTasks={completeAllTasks.bind(this)}
               />
               <FiltersWrapper
                  filterArr={['All', 'Active', 'Completed']}
                  filterValue={filterValue}
                  filterHandler={filterHandler.bind(this)}
                  clearCompleted={clearCompleted.bind(this)}
               />
            </div>
         </main>
      );
   }
}
