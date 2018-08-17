import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import 'bootstrap-css-only/css/bootstrap.css'
import './content/css/dashboard.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
