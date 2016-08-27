import React from 'react'
import {TableContainer} from 'containers'
import {homeTitle} from './styles.css'

const Home = () => {
  return (
    <div>
      <span className={homeTitle}>{'Patient Records'}</span>
      <TableContainer />
    </div>
  )
}

export default Home
