import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import App from './components/app'
import Home from './components/home'
import Albums from './components/albums'
import Posts from './components/posts'
import 'bootstrap-css-only/css/bootstrap.css'
import './content/css/dashboard.css'

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path='/home' component={Home} />
        <Route path='/albums' component={Albums} />
        <Route path='/posts' component={Posts} />
      </Route>
      <Redirect from='*' to='/home' />
    </Router>
  ),
  document.getElementById('root')
)
