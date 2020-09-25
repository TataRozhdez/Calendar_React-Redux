import React from 'react'
import Calendar from '../../common/Calendar/Calendar'
import { Navbar } from '../../common/Navbar/Navbar'
import './Home.scss'

export const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <div className='main'>
        <div className='baner'>
          <h1>
            Choose the day <br />
            for the meeting
          </h1>
          <p>
            We encourage you to book your <br />
            appointment online. <br />
            This will save you time.
          </p>
        </div>
        <Calendar />
      </div>

    </div>
  )
}
