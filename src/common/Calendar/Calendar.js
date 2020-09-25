import React, { useEffect } from 'react'
import {
  renderMonth
} from '../../redux/calendarActions'
import { connect, useDispatch } from 'react-redux'
import './Calendar.scss' 

const Calendar = ({ store }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(renderMonth(dispatch))
    // eslint-disable-next-line
  }, [])

  const { month } = store.surrentDate

  console.log('store', store)
  
  return (
    <div className='Calendar'>
      <div className='calendar-content'>
        <ul className='header-cal'>
          <li>&#60;</li>
          <li>{month}</li>
          <li>&#62;</li>
        </ul>
        <ul className='body-cal'>
          {
            store.fullMonth.map((j, index) => <li key={index}>{j}</li>)
          }
          { store.nameDay.map((d, index) => <li key={index}>{d}</li>) }
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    store
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     renderMonth: store => dispatch(get(store))
//   }
// }

export default connect(mapStateToProps)(Calendar)
