import React, { Component } from 'react';
import HeaderWrapper from '../components/ui/HeaderWrapper';
import NewTaskWrapper from '../components/ui/NewTaskWrapper';
import InfoWrapper from '../components/ui/InfoWrapper'
import FiltersWrapper from '../components/ui/FiltersWrapper';

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

   updateValue(e) {
      this.setState({ text: e.target.value });
   };

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
      e.preventDefault()
      this.setState({
         tasks: this.state.tasks.filter(item => item.completed === false),
         isChecked: true
      });
   };

   render() {
      const state = this.state;
      return (
         <main className="todo">
            <div className="todo__flex">
               <HeaderWrapper
                  text={state.text}
                  tasks={state.tasks}
                  addTask={this.addTask.bind(this)}
                  updateValue={this.updateValue.bind(this)}
               />
               <NewTaskWrapper
                  tasks={state.tasks}
                  filter={state.filterValue}
                  removeTask={this.removeTask.bind(this)}
                  checkboxHandler={this.checkboxHandler.bind(this)}
               />
               <InfoWrapper
                  isChecked={!state.isChecked}
                  tasks={state.tasks}
                  completeAllTasks={this.completeAllTasks.bind(this)}
               />
               <FiltersWrapper
                  filterArr={['All', 'Active', 'Completed']}
                  filterValue={state.filterValue}
                  filterHandler={this.filterHandler.bind(this)}
                  clearCompleted={this.clearCompleted.bind(this)}
               />
            </div>
         </main>
      );
   }
}
