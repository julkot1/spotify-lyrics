import { Track } from './types/track'

const getTrack = ({ name, id, external_urls, artists, album, uri }): Track => ({
  name,
  id,
  url: external_urls.spotify,
  images: album.images,
  uri,
  artists: artists.map((a) => a.name).reduce((p, a) => `${p}, ${a}`),
  artists_url: artists.map(({ id }) => `${process.env.API_URL}artist/${id}`),
  album_url: `${process.env.API_URL}album/${album.id}`,
  recommendations_url: `${process.env.API_URL}track/${id}/recommendations`,
  lyrics: '',
})
export default getTrack
