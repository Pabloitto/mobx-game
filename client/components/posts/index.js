import React from 'react'

import { ObservableToProps } from '../common/ObservableToProps'

import { fetchPosts, fetchPostById } from '../../services/posts'

const handleClick = (item, onPostSelect) => () => {
  onPostSelect(item.id, (data) => {
    window.alert(data.title)
  })
}

const renderPosts = (posts, onPostSelect) => {
  return posts.map(item => {
    return <li className='list-group-item' key={item.id}>
      <a onClick={handleClick(item, onPostSelect)}>{item.title}</a>
    </li>
  })
}

const Posts = ({
  posts = [],
  onPostSelect
}) => {
  return (
    <div>
      <h4>POSTS</h4>
      <ul className='list-group'>
        {renderPosts(posts, onPostSelect)}
      </ul>
    </div>
  )
}

export default ObservableToProps(Posts, [
  { propName: 'posts', observable: fetchPosts },
  { propName: 'onPostSelect', event: fetchPostById }
])
