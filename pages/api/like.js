import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user.refresh_token)
      const r = await spotify.addToMySavedTracks([req.query.id])
      res.send('The track has been added to Saved Tracks')
    } catch (err) {
      res.send('Unable to add to Saved Tracks')
    }
  } else res.send(null)
}
