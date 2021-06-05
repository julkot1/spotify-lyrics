import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'
import { getSong } from 'genius-lyrics-api'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user.refresh_token)
      const result = await spotify.getTrack(req.query.id)
      res.send({
        info: getTrack(result.body),
        artist: await getArtists(result.body.artists, spotify),
        album: await getAlbum(result.body.album.id, spotify),
        lyrics: await getLyricsF(result.body.name, result.body.artists[0].name),
      })
    } catch (err) {
      res.send(null)
    }
  } else res.send(null)
}
const getTrack = ({ name, duration_ms, explicit }) => ({
  name,
  duration_ms,
  explicit,
})
const getAlbum = async (id, spotify) => {
  const res = await spotify.getAlbum(id)
  const { name, images, release_date } = res.body
  return { name, images, release_date }
}
const getArtists = async (artists, spotify) => {
  const a = []
  await artists.forEach(async ({ id }) => {
    const res = await spotify.getArtist(id)
    const { name, genres, images } = res.body
    a.push({ name, images, genres: genres.reduce((p, n) => `${p}, ${n}`) })
  })
  return a
}
const getLyricsF = async (title, artistName) => {
  const options = {
    apiKey: 'airmRUZUGrqc2qPINCafngxYl4h-LC2TArJLe6DfnWT_W8Yhbsc2n9TDdF-zzgSt',
    title: removeRemastered(title),
    artist: artistName,
    optimizeQuery: true,
  }
  const song = await getSong(options)
  return song?.lyrics
}
const removeRemastered = (name) => {
  const re = /- (\d\d\d\d )*(Remastere*d*)*( (\d\d\d\d)|(Version))*/g
  var newstr = name.replace(re, '').replace(/Version/, '')
  return newstr
}
