import moment from 'moment'
import {
  SURRENT_DATE,
  SET_FULL_MONTH
  // PREV_MONTH,
  // NEXT_MONTH,
  // CALENDAR_ERROR
} from './types'

// get month
export const surrentDate = () => {
  const month = moment().format('MMMM')
  const day = moment().format('D')
  const name = moment().format('d')
  const year = moment().format('YYYY')  

  const surrentDate = {
    day,
    name,
    month,
    year
  }

  return {
    type: SURRENT_DATE,
    surrentDate
  }
}

// get numbers days of month
const fullMonthDay = (year, month) => {  
  let newDate = new Date(year, month + 1, 0)
    return newDate.getDate()
}

// render full month
export const renderMonth = async (dispatch) => {
  const state = await dispatch(surrentDate())
  const rMonth = []
  
  if (state) {
    const { month, year } = state.surrentDate
    const firstDay = new Date(`${month} 1, ${year} `)
    const numMonth = firstDay.getMonth()
    const dayInMonth = fullMonthDay(year, numMonth)
  
    // const rMonth = []
    for (let i = 1; dayInMonth >= i; i++) {
      rMonth.push(i.toString())
    }

    let dayInPrevMonth = fullMonthDay(year, numMonth - 1)
    let firstDayName = firstDay.getDay()
  
    while (firstDayName > 0) {
      rMonth.unshift(dayInPrevMonth.toString())
      dayInPrevMonth--
      firstDayName--
    }
  
    const lastDay = new Date(year, numMonth, dayInMonth, )
    let lastDayName = lastDay.getDay()
    let i = 1
  
    while (lastDayName < 6) {
      rMonth.push(i.toString())
      lastDayName++
      i++
    }
  }
  console.log(rMonth)
  console.log(state.surrentDate)

  return {
    type: SET_FULL_MONTH,
    fullMonth: rMonth,
    surrent: state.surrentDate
  }
}
// next month

// pick day
