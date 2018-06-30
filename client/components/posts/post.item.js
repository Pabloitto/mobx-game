import React from 'react'

export default ({ item, onClick }) => (
  <li className='list-group-item'>
    <a onClick={onClick}>{item.title}</a>
  </li>
)
