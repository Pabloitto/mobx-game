import React, { Component } from 'react'

import PostItem from './post.item'

export default class PostsList extends Component {
  constructor (props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }
  onPostReceived (data) {
    window.alert(data.title)
  }
  handleClick (item) {
    const { fetchPostById } = this.props
    fetchPostById(item.id, this.onPostReceived)
  }
  renderItem (item, index) {
    return (
      <PostItem
        key={index}
        item={item}
        onClick={() => this.handleClick(item)}
      />
    )
  }
  renderPosts () {
    const { posts = [] } = this.props
    return posts.map(this.renderItem)
  }
  render () {
    return (
      <div>
        <h4>POSTS</h4>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}
