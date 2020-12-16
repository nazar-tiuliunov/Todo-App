import React, { Component } from 'react';

export default class Form extends Component {
	render() {
		const { text, addTask, updateValue } = this.props;
		return (
			<form className='todo__form' onSubmit={addTask}>
				<input
					className='todo__form_enterTask'
					type='text'
					required
					placeholder='Enter new task'
					value={text}
					onChange={updateValue}
				/>
				<button className='todo__button form' type='submit'>
					Add Task
				</button>
			</form>
		);
	}
}
