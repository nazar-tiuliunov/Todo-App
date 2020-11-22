import React, { Component } from 'react'

export default class Filter extends Component {
   render() {
      const prop = this.props;
      return (
         <label className='todo__filter'>
            <input
               type='radio'
               value={prop.value}
               checked={prop.filterValue === prop.value}
               onChange={(event) => { prop.filterHandler(event) }}
            />
            {prop.value}
         </label>
      )
   }
}
