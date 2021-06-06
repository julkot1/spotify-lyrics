import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user.refresh_token)
      const response = await spotify.addToQueue(req.query.uri)
      res.send('The track has been added to queue')
    } catch (err) {
      res.send('Unable to queue a track')
    }
  } else res.send(null)
}
