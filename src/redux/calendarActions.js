import moment from 'moment'
import {
  SURRENT_DATE,
  SET_FULL_MONTH,
  PREV_MONTH,
  NEXT_MONTH
} from './types'

// get month
export const surrentDate = () => {
  const month = moment().format('MMMM')
  const day = moment().format('D')
  const nameDay = moment().format('d')
  const year = moment().format('YYYY')  

  const firstDay = new Date(`${month} 1, ${year} `)
  const numMonth = firstDay.getMonth()

  const surrentDate = {
    day,
    nameDay,
    month,
    numMonth,
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
export const renderMonth = async (dispatch, s) => {
  let state = s
  const rMonth = []

  if (!state) {
    const q = await dispatch(surrentDate())
    state = q.surrentDate
  }

  if (state) {

    const { month, year, numMonth } = state
    const firstDay = new Date(`${month} 1, ${year} `)
    const dayInMonth = fullMonthDay(year, numMonth)
  
    for (let i = 1; dayInMonth >= i; i++) {
      rMonth.push(i.toString())
    }

    let dayInPrevMonth = fullMonthDay(year, numMonth - 1)
    let firstDayName = firstDay.getDay()
  
    while (firstDayName > 0) {
      rMonth.unshift(dayInPrevMonth)
      dayInPrevMonth--
      firstDayName--
    }
  
    const lastDay = new Date(year, numMonth, dayInMonth, )
    let lastDayName = lastDay.getDay()
    let i = 1
  
    while (lastDayName < 6) {
      rMonth.push(i)
      lastDayName++
      i++
    }
  }

  return {
    type: SET_FULL_MONTH,
    fullMonth: rMonth,
    surrent: state
  }
}

// prev month
export const renderPrevMonth = (day, month, year, dispatch) => {
  const newMonth = month - 1

  const d = new Date(year, newMonth, day)
  const nameDay = d.getDay()
  const options = { month: 'long'}
  const nameM = new Intl.DateTimeFormat('en-US', options).format(d)

  const surrentDate = {
    day,
    nameDay,
    month: nameM,
    numMonth: newMonth,
    year
  }

  dispatch(renderMonth(dispatch, surrentDate))

  return {
    type: PREV_MONTH,
    payload: surrentDate
  }
}

// next month
export const renderNextMonth = (day, month, year, dispatch) => {
  const newMonth = month + 1

  const d = new Date(year, newMonth, day)
  const nameDay = d.getDay()
  const options = { month: 'long'}
  const nameM = new Intl.DateTimeFormat('en-US', options).format(d)

  const surrentDate = {
    day,
    nameDay,
    month: nameM,
    numMonth: newMonth,
    year
  }

  dispatch(renderMonth(dispatch, surrentDate))

  return {
    type: NEXT_MONTH,
    payload: surrentDate
  }
}