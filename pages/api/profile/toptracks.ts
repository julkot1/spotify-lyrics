import useSpotify from '@utils/useSpotify'
import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/client'
import getTrack from '../../../utils/getTrack'

export default async (req: NextApiRequest, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user['refresh_token'])
      const list = (
        await spotify.getMyTopTracks({
          time_range: req.query['term'] as
            | 'long_term'
            | 'medium_term'
            | 'short_term',
        })
      ).body

      res.send(list.items.map(getTrack))
    } catch (err) {
      res.send(null)
    }
  } else res.send(null)
}
