import { Image } from './image'
import { Track } from './track'

export interface Artist {
  name: string
  url: string
  images: Image[]
  genres: string
  topTracks: Track[]
}
