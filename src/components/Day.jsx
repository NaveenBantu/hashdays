import React from 'react'

const Day = ({ number }) => {
  return (
    <div className='flex justify-around gap-2 items-center bg-slate-300 p-4 hover:bg-slate-200 text-center'>
      <p>
        {number}
      </p>
      <input type="checkbox" className='w-8 h-8 rounded-md' />
    </div>
  )
}

export default Day