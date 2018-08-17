import React, {Component} from 'react'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import Home from './home'
import Albums from './albums'
import Posts from './posts'

class App extends Component {
  render () {
    return (
      <BrowserRouter >
        <div>
          <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
            <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='#'>NAME</a>
            <ul className='navbar-nav px-3'>
              <li className='nav-item text-nowrap'>
                <span className='nav-link'>sing out</span>
              </li>
            </ul>
          </nav>
          <div className='container-fluid'>
            <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
              <div className='sidebar-sticky'>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <Link to='/home' className='nav-link'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/albums' className='nav-link'>Albums</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/posts' className='nav-link'>Posts</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main className='col-md-9 ml-sm-auto col-lg-10 px-4'>
              <div className='main-content' />
              <Routes />
            </main>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const Routes = () => {
  return (

    <Switch>
      <Route path='/home' exact component={Home} />
      <Route path='/albums' exact component={Albums} />
      <Route path='/posts' exact component={Posts} />
      <Redirect from='*' to='/home' />
    </Switch>
  )
}
export default App
