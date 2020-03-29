import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
// import SearchBar from './searchBar';
import ShowAllButton from './showAllButton';
import ShowAllCountryStats from './showAllCountryStats';
import IndiaStateWise from './IndiaStateWise';
import {
    getCountryData,
    getIndiaStateWiseData
} from './ServiceAPIs';
import './styles/country-data.css';

export default class CountryData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: {},
            show: false,
            search: 'India',
            showAllCountry: false,
            indiaStatus: {}
        }
    }
    componentDidMount() {
        this.getCountryData();
        this.getIndiaStateWiseStatus();
    }

    getIndiaStateWiseStatus = () =>
        getIndiaStateWiseData()
            .then(res => this.setState({
                indiaStatus: res.data,
                show: true
            }))
            .catch(err => console.error(err));

    getCountryData = () => {
        getCountryData(this.state.search)
            .then(data => this.setState({
                summary: JSON.parse(data),
            }))
            .catch(err => console.error('Error: ', err));
    }

    onChange = e => {
        e.preventDefault();
        this.setState({
            search: e.target.value
        })
    }

    onSearch = e => {
        e.preventDefault();
        this.getCountryData();
        this.setState({
            search: ''
        })
    }

    showAllCountry = e => {
        e.preventDefault();
        this.setState({
            showAllCountry: true
        })
    }
    render() {
        return (
            <>
                <div className=''>
                    <p className='text-center h6 bg-dark p-1 text-light'>
                        { 'India official stats'}
                    </p>
                    {/* <SearchBar country={this.state.summary.country} onChange={this.onChange} onSubmit={this.onSearch} /> */}
                </div>
                <div className='country-data'>
                    <div className=''>
                        <p className='title'>Confirmed</p>
                        <p className='content'>{this.state.summary.cases}</p>
                    </div>
                    <div className='bg-danger text-light'>
                        <p className='title'>New Cases</p>
                        <p className='content'>{`+${this.state.summary.todayCases}`}</p>
                    </div>
                    <div className='text-danger'>
                        <p className='title'>Deaths</p>
                        <p className='content'>{this.state.summary.deaths}</p>
                    </div>
                    <div className=''>
                        <p className='title'>Active</p>
                        <p className='content'>{this.state.summary.active}</p>
                    </div>
                    <div className=''>
                        <p className='title'>Critical</p>
                        <p className='content'>{this.state.summary.critical}</p>
                    </div>
                    <div className='text-success'>
                        <p className='title'>Recovered</p>
                        <p className='content'>{this.state.summary.recovered}</p>
                    </div>
                </div>
                {
                    this.state.show
                        ? <IndiaStateWise {...this.state.indiaStatus} />
                        : <div className='text-center'>
                            <Loader type='Oval' />
                        </div>
                }
                <ShowAllButton onClick={this.showAllCountry} />
                {
                    this.state.showAllCountry &&
                    <ShowAllCountryStats />
                }
            </>
        )
    }
}
