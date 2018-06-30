import React from 'react'
import { Link } from 'react-router'

export default ({children}) => {
  return (
    <div>
      <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
        <a className='navbar-brand col-sm-3 col-md-2 mr-0' href='#'>NAME</a>
        <ul className='navbar-nav px-3'>
          <li className='nav-item text-nowrap'>
            <Link className='nav-link'>Sign out</Link>
          </li>
        </ul>
      </nav>
      <div className='container-fluid'>
        <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
          <div className='sidebar-sticky'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <Link to='/home' className='nav-link'>HOME</Link>
              </li>
              <li className='nav-item'>
                <Link to='/albums' className='nav-link'>ALBUMS</Link>
              </li>
              <li className='nav-item'>
                <Link to='/posts' className='nav-link'>POSTS</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className='col-md-9 ml-sm-auto col-lg-10 px-4'>
          <div className='main-content'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
