import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'
import { getSong } from 'genius-lyrics-api'
import getTrack from '@utils/getTrack'

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

const getAlbum = async (id, spotify) => {
  const res = await spotify.getAlbum(id)
  const { name, images, release_date, artists, external_urls, total_tracks } =
    res.body

  return {
    name,
    images,
    release_date,
    url: external_urls.spotify,
    total_tracks,
    tracks: await getAlbumTracks(id, spotify),
    artists: artists.map((a) => a.name).reduce((p, a) => `${p}, ${a}`),
  }
}
const getAlbumTracks = async (id, spotify) => {
  const tracks = []
  const getNext = async (offset) => {
    const {
      body: { items, next },
    } = await spotify.getAlbumTracks(id, { offset: offset })
    tracks.push(
      ...items.map(({ name, id, artists }) => ({
        name,
        id,
        artists: artists.map((a) => a.name).reduce((p, a) => `${p}, ${a}`),
      }))
    )
    if (next != null) getNext(new URL(next).searchParams.get('offset'))
  }
  await getNext(0)
  return tracks
}
const getArtists = async (artists, spotify) => {
  const a = []
  await artists.forEach(async ({ id }) => {
    const res = await spotify.getArtist(id)
    const {
      body: { tracks },
    } = await spotify.getArtistTopTracks(id, 'PL')

    const { name, genres, images, external_urls } = res.body
    a.push({
      name,
      images,
      genres: genres.reduce((p, n) => `${p}, ${n}`),
      url: external_urls.spotify,
      topTracks: tracks.map(({ name, id, album: { images } }) => ({
        name,
        id,
        img: images[0],
      })),
    })
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
