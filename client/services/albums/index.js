import { from } from 'rxjs'
import { map } from 'rxjs/operators'
import BaseService from '../service.base'

export const fetchAlbums = () => {
  return from(BaseService.request({
    url: 'https://jsonplaceholder.typicode.com/albums'
  })).pipe(map(data => data))
}

export const fetchAlbumById = (id) => {
  return from(BaseService.request({
    url: `https://jsonplaceholder.typicode.com/albums/${id}`
  })).pipe(map(data => data))
}
