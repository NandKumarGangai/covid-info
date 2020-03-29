import React from 'react'

export default function ShowAllCountry({
    country = '',
    state = '',
    cases = 0,
    todayCases = 0,
    deaths = 0,
    todayDeaths = 0,
    recovered = 0,
    active = 0,
    critical = 0,
    confirmed = 0,
    hide = false,
    background = false
}) {
    const bgColor = background ? 'bg-info text-dark h5' : '';
    return (
        <tr className={bgColor}>
            <th scope="col">
                <p>
                    { country ? country : state }
                </p>
            </th>
            <td>
                <p>
                    { cases ? cases : confirmed }
                </p>
            </td>
            {
                !hide &&
                <td className='bg-warning'>
                    <p>
                        {`+${todayCases}`}
                    </p>
                </td>
            }
            <td>
                <p className='text-danger'>
                    {deaths}
                </p>
            </td>
            <td className='hide-sm'>
                <p>
                    {active}
                </p>
            </td>
            {
                !hide &&
                <td className='hide-sm'>
                    <p>
                        {critical}
                    </p>
                </td>
            }
            <td>
                <p className={`text-success ${bgColor}`}>
                    {recovered}
                </p>
            </td>
        </tr>
    )
}
