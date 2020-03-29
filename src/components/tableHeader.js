import React from 'react'

export default function TableHeader({ toggle = 'country', hide = false }) {
    return (
        <tr>
            <th scope="col">{toggle}</th>
            <th scope="col">Confirmed</th>
            {
                !hide &&
                <th scope="col">Todays Case</th>
            }
            <th scope="col">Deaths</th>
            <th scope="col" className='hide-sm'>Active</th>
            {
                !hide &&
                <th scope="col" className='hide-sm'>Critical</th>
            }
            <th scope="col">Recovered</th>
        </tr>
    )
}
