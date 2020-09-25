import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { About } from './components/About/About'
import { Home } from './components/Home/Home'
import './resources/index.scss'

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}
