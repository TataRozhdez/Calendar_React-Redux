import React, { useEffect, useState } from 'react'
import {
  renderMonth,
  renderPrevMonth,
  renderNextMonth
} from '../../redux/calendarActions'
import { connect, useDispatch } from 'react-redux'
import { PickDay } from '../PickDay/PickDay'
import './Calendar.scss' 

const Calendar = ({ store }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(renderMonth(dispatch))
    // eslint-disable-next-line
  }, [])
  const [pickerDay, setDay] = useState(false)

  const { day, month, numMonth, year } = store.surrentDate

  const handlePrevMonth = () => {
    dispatch(renderPrevMonth(day, numMonth, year, dispatch))
  }

  const handleNextMonth = () => {
    dispatch(renderNextMonth(day, numMonth, year, dispatch))
  }

  const handlePickDay = (event) => {
    setDay({
      month,
      numMonth,
      year,
      pickDay: event.target.id
    })
  }

  const closePicker = () => {
    setDay(false)
  }
  
  return (
    <div className='Calendar'>
      { pickerDay && <PickDay pickerDay={pickerDay} closePicker={closePicker} /> } 
      <div className='calendar-content'>
        <ul className='header-cal'>
          <li onClick={handlePrevMonth} className='arrow'>&#60;</li>
          <li>{month}</li>
          <li onClick={handleNextMonth} className='arrow'>&#62;</li>
        </ul>
        <span />
        <ul className='body-cal'>
          {
            store.fullMonth.map((j, index) => (
              typeof j === 'number' ? <li key={index} className='another-month' id={j} onClick={handlePickDay}>{j}</li>
                :  j === day
                ? <li key={index} className='today' onClick={handlePickDay} id={j}>{j}</li>
                : <li key={index} onClick={handlePickDay} id={j}>{j}</li>
              )
            )
          }
        </ul>
        <span />
        <ul className='body-cal'>
          { store.nameDay.map((d, index) => <li className='cal-footer' key={index}>{d}</li>) }
        </ul>
        <span />
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    store
  }
}

export default connect(mapStateToProps)(Calendar)
