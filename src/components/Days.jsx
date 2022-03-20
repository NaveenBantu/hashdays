import React from 'react'
import Day from './Day'

const Days = ({inpDays}) => {
    const days = inpDays
    const dayRows = []
    for (let index = 0; index < days; index++) {
        dayRows.push(<Day number={index+1}></Day>)
    }
    return (
        <div className='days'>{dayRows}</div>
        )
}

export default Days