import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'
import { getSong } from 'genius-lyrics-api'
import getTrack from '@utils/getTrack'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user['refresh_token'])
      const result = await spotify.getTrack(req.query.id)
      const lyrics = await getLyrics(
        result.body.name,
        result.body.artists[0].name
      )
      res.send({
        ...getTrack(result.body),
        lyrics,
      })
    } catch (err) {
      res.send(null)
    }
  } else res.send(null)
}

const getLyrics = async (title: string, artistName) => {
  const options = {
    apiKey: process.env.GENIUS,
    title: removeRemastered(title),
    artist: artistName,
    optimizeQuery: true,
  }
  const song = await getSong(options)
  return song?.lyrics
}
const removeRemastered = (name: string): string => {
  const re = /- (\d\d\d\d )*(Remastere*d*)*( (\d\d\d\d)|(Version))*/g
  var newStr = name.replace(re, '').replace(/Version/, '')
  return newStr
}
