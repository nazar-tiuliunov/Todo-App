import React, { Component } from 'react';
import Filter from './Filter';

export default class FiltersWrapper extends Component {
   render() {
      const prop = this.props;
      return (
         <section className='todo__filters'>
            <div className='container filter'>
               {prop.filterArr.map((value, index) => {
                  return <Filter content={value} key={index} />
               })}
               <button className='todo__filter' onClick={() => { prop.clearCompleted() }}>Clear Completed</button>
            </div>
         </section>
      )
   }
}
