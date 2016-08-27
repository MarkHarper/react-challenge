import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, PatientContainer } from 'containers'

export default function routes (checkAuth, history) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer}>
        <Route path='/patient' component={PatientContainer}></Route>
        <IndexRoute component={HomeContainer} />
      </Route>
    </Router>
  )
}
