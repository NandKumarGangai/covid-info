import React, { Component } from 'react'
import './styles/summary.css';

export default class Summary extends Component {

  render() {
    return (
      <div className='summary' style={{backgroundColor: '#eee'}}>
        <div className=''>
          <p className='summary-title'>Confirmed</p>
          <p className='summary-content'>{this.props.summary.cases}</p>
        </div>
        <div className=''>
          <p className='summary-title'>Deaths</p>
          <p className='summary-content text-danger'>{this.props.summary.deaths}</p>
        </div>
        <div className=''>
          <p className='summary-title'>Recovered  </p>
          <p className='summary-content text-success'>{this.props.summary.recovered}</p>
        </div>
      </div>
    )
  }
}

