import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user.refresh_token)
      const {
        body: {
          item: {
            name,
            artists,
            id,
            album: { images },
          },
        },
      } = await spotify.getMyCurrentPlayingTrack()
      res.send({
        name,
        artists: artists.map((a) => a.name).reduce((p, n) => `${p}, ${n}`),
        id,
        images,
      })
    } catch (err) {
      res.send(null)
    }
  } else res.send(null)
}
