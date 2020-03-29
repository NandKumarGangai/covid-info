import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import ShowAllCountry from './showAllCountry';
import TableHeader from './tableHeader';
import { getAllCountryData } from './ServiceAPIs';
import './styles/table.css';

export default class ShowAllCountryStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: [],
            current: 0
        }
    }
    componentDidMount() {
        getAllCountryData()
            .then(data => this.setState({
                summary: JSON.parse(data)
            }))
            .catch(err => console.error('Error: ', err));
    }
    render() {
        return (
            <div>
                {
                    this.state.summary.length ?
                        <table className="table table-sm text-center">
                            <thead className="thead-dark">
                                <TableHeader toggle={'Country'} />
                            </thead>
                            <tbody>
                                {
                                    this.state.summary.map((country, index) => <ShowAllCountry key={index} { ...country } />)
                                }
                            </tbody>
                        </table> :
                        <div className='text-center'>
                            <Loader type='Oval' />
                        </div>
                }
            </div>
        )
    }
}
