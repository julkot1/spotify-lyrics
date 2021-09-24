import getTrack from '@utils/getTrack'
import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user.refresh_token)
      const {
        body: { item },
      } = await spotify.getMyCurrentPlayingTrack()
      res.send(getTrack(item))
    } catch (err) {
      res.send(null)
    }
  } else res.send(null)
}
