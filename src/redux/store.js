import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import { calendarReducer, initialState } from './calendarReducer'

export const store = createStore(calendarReducer, initialState, applyMiddleware(promiseMiddleware))
