import { ObservableToProps } from '../common/ObservableToProps'

import { fetchAlbums, fetchAlbumById } from '../../services/albums'

import AlbumList from './albums.list'

export default ObservableToProps(AlbumList, [
  { propName: 'albumList', observable: fetchAlbums },
  { propName: 'fetchAlbumById', event: fetchAlbumById }
])
