import React, { Component } from 'react';
import Filter from './Filter';

export default class FiltersWrapper extends Component {
   render() {
      const prop = this.props;
      return (
         <section className='todo__filters'>
            <div className='container filter'>

               {prop.filterArr.map((value, index) => {
                  return <Filter
                     value={value}
                     filterValue={prop.filterValue}
                     key={index}
                     filterHandler={prop.filterHandler.bind(this)}
                  />
               })}
               <button className='todo__filter' onClick={(e) => { prop.clearCompleted(e) }}>Clear Completed</button>

            </div>
         </section>
      )
   }
}
