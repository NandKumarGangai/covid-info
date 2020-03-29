import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import Summary from './components/summary';
import LastUpdate from './components/lastUpdate';
import Header from './components/header';
import CountryData from './components/CountryData';
import Footer from './components/footer';
import { getAllData } from './components/ServiceAPIs/index';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: {},
      show: false
    }
  }
  componentDidMount() {
      getAllData()
        .then(data => this.setState({
          summary: JSON.parse(data),
          show: true
        }))
        .catch(err => console.error('Error: ', err));
  }

  render() {
    return (
      <div>
        {
          this.state.show ?
          <>
            <Header />
            <div className='container'>
              <LastUpdate miliseconds={this.state.summary.updated} />
              <Summary summary={this.state.summary} />
              <CountryData />
            </div>
            <Footer />
            </> :
            <div className='text-center'>
              <Loader type='Oval' />
            </div>
        }
      </div>
    )
  }
}
