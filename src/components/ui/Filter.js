import React, { Component } from 'react';

export default class Filter extends Component {
	render() {
		const { value, filterValue, filterHandler } = this.props;
		return (
			<label
				className={
					filterValue === value ? 'todo__button active' : 'todo__button'
				}
				onClick={() => {
					filterHandler(value);
				}}
			>
				{value}
			</label>
		);
	}
}
