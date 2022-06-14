import React from 'react'
import Day from './Day'

const Days = ({ inpDays }) => {
    const days = inpDays
    const dayRows = []
    for (let index = 0; index < days; index++) {
        dayRows.push(<Day number={index + 1}></Day>)
    }
    return (
        <div className='grid grid-cols-5 gap-2 m-2'>{dayRows}</div>
    )
}

export default Days