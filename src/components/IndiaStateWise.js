import React from 'react';
import TableHeader from './tableHeader';
import ShowAllCountry from './showAllCountry';
import './styles/india-state-wise.css';

export default function IndiaStateWise({
    source = '',
    lastRefreshed = '',
    total = {},
    statewise = []
}) {
    const totalProps = {
        state: 'Total',
        ...total
    }
    return (
        <div>
            <table className='table table-sm text-center'>
                <thead className='bg-dark text-light'>
                    <TableHeader toggle={'State'} hide={true} />
                </thead>
                <tbody>
                    <ShowAllCountry hide={true} {...totalProps} background={true} />
                    {
                        statewise.map((state, i) => state.confirmed > 0
                            ? <ShowAllCountry key={i} {...state} hide={true} />
                            : null)
                    }
                </tbody>
            </table>
            <p className='text-center last-update'>
                {'**Above data is provided by '}
                <a href={`${source}`}>
                    {source}
                </a>
                {` and updated on ${new Date(lastRefreshed)}`}
            </p>
        </div>
    )
}
