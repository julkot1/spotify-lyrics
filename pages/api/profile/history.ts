import getTrack from '../../../utils/getTrack'
import { HistoryType } from '@utils/types/history'
import useSpotify from '@utils/useSpotify'
import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user['refresh_token'])
      const tracks = (
        await spotify.getMyRecentlyPlayedTracks({
          before: req.query['before']
            ? parseInt(req.query['before'] as string)
            : undefined,
          after: req.query['after']
            ? parseInt(req.query['before'] as string)
            : undefined,
        })
      ).body
      res.send({
        tracks: tracks.items.map((e) => ({
          playedAt: e.played_at,
          ...getTrack(e.track as any),
        })),
        after: parseInt(tracks.cursors.after),
        before: parseInt(tracks.cursors.before),
      })
    } catch (err) {
      res.send(err)
    }
  } else res.send('not sign in')
}
/*
const history: HistoryType = {
        
        tracks: tracks.items.map((e) => getTrack(e as any)),
      }
*/
