import React, { Component } from 'react'

export default class Filter extends Component {
   render() {
      const { value, filterValue, filterHandler } = this.props;
      return (
         <label className='todo__filter'>
            <input
               type='radio'
               value={value}
               checked={filterValue === value}
               onChange={(event) => { filterHandler(event) }}
            />
            {value}
         </label>
      )
   }
}
