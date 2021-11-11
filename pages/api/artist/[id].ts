import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'
import getTrack from '@utils/getTrack'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user.refresh_token)
      const artist = await spotify.getArtist(req.query.id)
      const tracks = await spotify.getArtistTopTracks(req.query.id, 'PL')
      res.send({
        ...getArtist(artist.body),
        ...getTopTracks(tracks.body.tracks),
      })
    } catch (err) {
      res.send(err)
    }
  } else res.send(null)
}
const getArtist = ({ name, genres, images, external_urls }) => {
  return {
    name,
    images,
    genres: genres.reduce((p, n) => `${p}, ${n}`),
    url: external_urls.spotify,
  }
}
const getTopTracks = (tracks) => {
  return {
    topTracks: tracks.map((track) => getTrack(track)),
  }
}
