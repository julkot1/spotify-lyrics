import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'
import getTrack from '@utils/getTrack'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user.refresh_token)
      const {
        body: { tracks },
      } = await spotify.getRecommendations({
        seed_tracks: [req.query.id],
        limit: 10,
      })

      res.send(tracks.map((track) => getTrack(track)))
    } catch (err) {
      res.send(err)
    }
  } else res.send(null)
}
