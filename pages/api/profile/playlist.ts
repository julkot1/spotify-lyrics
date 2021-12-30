import useSpotify from '@utils/useSpotify'
import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/client'

export interface ReqBody {
  tracks: string[]
}
export default async (req: NextApiRequest, res) => {
  const session = await getSession({ req })
  if (req.method != 'POST') res.send('invalid method: ' + req.method)
  if (session) {
    try {
      const spotify = await useSpotify(session.user['refresh_token'])
      const list = (
        await spotify.createPlaylist(req.query['name'] as string, {
          public: false,
        })
      ).body
      const tracks = (req.body as ReqBody).tracks
      await spotify.addTracksToPlaylist(list.id, tracks)
      res.send('done!')
    } catch (err) {
      res.send(err)
    }
  } else res.send('not sign in')
}
