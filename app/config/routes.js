import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, PatientContainer } from 'containers'

export default function routes (history) {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <Route path='/patient/:name' component={PatientContainer} />
        <IndexRoute component={HomeContainer} />
      </Route>
    </Router>
  )
}
