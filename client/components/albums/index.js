import React from 'react'

import { ObservableToProps } from '../common/ObservableToProps'

import { fetchAlbums } from '../../services/albums'

const Albums = ({
  albumList = []
}) => {
  return (
    <div>
      <h4>ALBUMS</h4>
      <ul className='list-group'>
        {
         albumList.map(item => {
           return <li className='list-group-item' key={item.id}>{item.title}</li>
         })
        }
      </ul>
    </div>
  )
}

export default ObservableToProps(Albums, [
  { propName: 'albumList', observable: fetchAlbums }
])
