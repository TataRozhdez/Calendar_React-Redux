import React from 'react'
import './PickDay.scss'

export const PickDay = ({ pickerDay, closePicker }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const { month, numMonth, year, pickDay } = pickerDay
  const date = new Date(year, numMonth, pickDay)
  const nameDay = days[date.getDay()]

  let day = `${pickDay}th`

  if (pickDay === '1' || '21' || '31') day = `${pickDay}st`
  if (pickDay === ('2' || '22')) day = `${pickDay}nd`
  if (pickDay === '3') day = `${pickDay}rd`
  
  return (
    <div className='PickDay' onClick={closePicker}>
      <div className='window-day'>
        <span className='esc'>x</span>
        <div className='data'>
          <span>Month</span>
          <p>{month}</p>
        </div>
        <div className='data'>
          <span>Day</span>
          <p>the {day} {nameDay}</p>
        </div>
      </div>
    </div>
  )
}
