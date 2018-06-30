import { from } from 'rxjs'
import { map } from 'rxjs/operators'
import BaseService from '../service.base'

export const fetchPosts = () => {
  return from(BaseService.request({
    url: 'https://jsonplaceholder.typicode.com/posts'
  })).pipe(map(data => data))
}

export const fetchPostById = (id) => {
  return from(BaseService.request({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`
  })).pipe(map(data => data))
}
