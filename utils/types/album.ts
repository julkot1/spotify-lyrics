import { Image } from './image'

export interface AlbumTrack {
  name: string
  id: string
  artists: string | string[]
}
console.log('album.ts')
console.log('album1')

export interface Artist {
  name: string
  url: string
  images: Image[]
  artists: string | string[]
  total_tracks: number
  tracks: AlbumTrack[]
}
