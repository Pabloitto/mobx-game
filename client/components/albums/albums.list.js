import React, { Component } from 'react'

import AlbumItem from './album.item'

export default class Albums extends Component {
  constructor (props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }
  onAlbumReceived (data) {
    window.alert(data.title)
  }
  handleClick (item) {
    const { fetchAlbumById } = this.props
    fetchAlbumById(item.id, this.onAlbumReceived)
  }
  renderItem (item, index) {
    return (
      <AlbumItem
        key={index}
        item={item}
        onClick={() => this.handleClick(item)}
      />
    )
  }
  renderAlbums () {
    const { albumList = [] } = this.props
    return albumList.map(this.renderItem)
  }
  render () {
    return (
      <div>
        <h4>ALBUMS</h4>
        <ul className='list-group'>
          {this.renderAlbums()}
        </ul>
      </div>
    )
  }
}
