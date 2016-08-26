import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'
import routes from './config/routes'
import * as reducers from 'redux/modules'

const store = createStore(combineReducers({...reducers, routing: routerReducer}), compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    {routes(history)}
  </Provider>,
document.getElementById('app'))
