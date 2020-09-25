import {
  SURRENT_DATE,
  SET_FULL_MONTH,
  PREV_MONTH,
  NEXT_MONTH
} from './types'

export const initialState = {
  surrentDate: {
    day: null,
    nameDay: null,
    month: null,
    numMonth: null,
    year: null
  },
  fullMonth: [],
  nameDay: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  pickDay: {
    render: false,
    data: []
  },
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
    case PREV_MONTH:
      return {
        ...state,
        surrentDate: action.payload
      }
      case NEXT_MONTH:
        return {
          ...state,
          surrentDate: action.payload
        }
    default:
      return state
  }
}