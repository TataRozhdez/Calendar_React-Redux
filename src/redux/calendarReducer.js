import {
  SURRENT_DATE,
  SET_FULL_MONTH
  // PREV_MONTH,
  // NEXT_MONTH,
} from './types'

export const initialState = {
  surrentDate: {
    day: null,
    name: null,
    month: null,
    year: null
  },
  fullMonth: [],
  nameDay: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  loading: true
}

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SURRENT_DATE: 
      return {
        ...state,
        surrentDate: action.surrentDate,
        loading: false
      }
    case SET_FULL_MONTH:
      return {
        ...state,
        fullMonth: action.fullMonth,
        surrentDate: action.surrent
      }
    default:
      return state
  }
}