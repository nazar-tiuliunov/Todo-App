import React, { Component } from 'react';
import HeaderWrapper from '../components/ui/HeaderWrapper';
import NewTaskWrapper from '../components/ui/NewTaskWrapper';
import InfoWrapper from '../components/ui/InfoWrapper'
import FiltersWrapper from '../components/ui/FiltersWrapper';

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
                  removeTask={this.removeTask.bind(this)}
                  handleKeyPress={this.handleKeyPress.bind(this)}
                  checkHandler={this.checkHandler.bind(this)}
               />
               <InfoWrapper
                  isChecked={!state.isChecked}
                  tasks={state.tasks}
                  completeAllTasks={this.completeAllTasks.bind(this)}
               />
               <FiltersWrapper
                  filterArr={['All', 'Active', 'Completed']}
                  clearCompleted={this.clearCompleted.bind(this)}
               />
            </div>
         </main>
      );
   }
}
