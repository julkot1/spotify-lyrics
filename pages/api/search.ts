import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user.refresh_token)
      const result = await spotify.searchTracks(req.query.q)
      const items = result.body.tracks.items.map((track) => ({
        name: track.name,
        artists: track.artists
          .map((a) => a.name)
          .reduce((p, n) => `${p}, ${n}`),
        album: track.album.name,
        img: track.album.images[0],
        id: track.id,
      }))
      res.send(items)
    } catch (err) {
      res.send([])
    }
  } else res.send([])
}
