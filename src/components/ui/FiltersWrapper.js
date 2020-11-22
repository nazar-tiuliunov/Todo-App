import React, { Component } from 'react';
import Filter from './Filter';

export default class FiltersWrapper extends Component {
   render() {
      const { filterArr, filterValue, filterHandler, clearCompleted } = this.props;
      return (
         <section className='todo__filters'>
            <div className='container filter'>
               {filterArr.map((value, index) => {
                  return <Filter key={index} {...{ value, filterValue, index, filterHandler }} />
               })}
               <button className='todo__filter' onClick={(e) => { clearCompleted(e) }}>Clear Completed</button>

            </div>
         </section>
      )
   }
}
