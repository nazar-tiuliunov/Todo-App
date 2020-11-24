import React, { Component } from 'react';
import HeaderWrapper from './HeaderWrapper';
import NewTaskWrapper from './NewTaskWrapper';
import InfoWrapper from './InfoWrapper'
import FiltersWrapper from './FiltersWrapper';

export default class Tasks extends Component {
   constructor(props) {
      super(props);
      this.state = {
         tasks: [],
         text: '', // text of task
         isChecked: true, // state of 'completeAllTasks' checkbox
         filterValue: 'All'
      };
   };

   updateValue(event) { this.setState({ text: event.target.value }) };

   addTask(event) {
      event.preventDefault();
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
         tasks: this.state.tasks.map((task, id) => id === index ? { ...task, completed: !task.completed } : task)
      });
   };

   filterHandler(value) { this.setState({ filterValue: value }) };

   completeAllTasks() {
      this.setState({
         isChecked: !this.state.isChecked,
         tasks: this.state.tasks.map(task => this.state.isChecked ? { ...task, completed: true } : { ...task, completed: false })
      });
   };

   clearCompleted(event) {
      event.preventDefault();
      this.setState({
         tasks: this.state.tasks.filter(task => task.completed === false),
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
