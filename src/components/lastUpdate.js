import React from 'react';

export default function LastUpdate({ miliseconds = 0 }) {
    return (
        <p className='text-center last-update'>
           { miliseconds ? `${new Date(miliseconds)}` : '' } 
        </p>
    )
}
