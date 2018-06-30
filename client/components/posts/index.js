import { ObservableToProps } from '../common/ObservableToProps'

import { fetchPosts, fetchPostById } from '../../services/posts'

import PostsList from './posts.list'

export default ObservableToProps(PostsList, [
  { propName: 'posts', observable: fetchPosts },
  { propName: 'fetchPostById', event: fetchPostById }
])
