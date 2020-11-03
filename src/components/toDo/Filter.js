import React, { Component } from 'react'

export default class Filter extends Component {
   render() {
      return (
         <button className='todo__filter'>{this.props.content}</button>
      )
   }
}
