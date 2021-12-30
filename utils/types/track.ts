import { Image } from './image'

export interface Track {
  name: string
  id: string
  url: string
  artists: string | string[]
  lyrics: string
  artists_url: string[]
  album_url: string
  recommendations_url: string
  uri: string
  images: Image[]
}
export interface HistoryTrack extends Track {
  playedAt: string
}
