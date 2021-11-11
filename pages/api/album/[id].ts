import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user['refresh_token'])
      const album = await spotify.getAlbum(req.query.id)
      const tracks = await getAlbumTracks(req.query.id, spotify)
      res.send({
        ...getAlbum(album.body),
        tracks,
      })
    } catch (err) {
      res.send(err)
    }
  } else res.send(null)
}
const getAlbum = ({
  name,
  images,
  release_date,
  artists,
  external_urls,
  tracks: { total },
}: SpotifyApi.SingleAlbumResponse) => {
  return {
    name,
    images,
    release_date,
    url: external_urls.spotify,
    total_tracks: total,
    artists: artists.map((a) => a.name).reduce((p, a) => `${p}, ${a}`),
  }
}
const getAlbumTracks = async (id, spotify) => {
  let tracks = []
  const getNext = async (offset) => {
    const {
      body: { items, next },
    } = await spotify.getAlbumTracks(id, { offset: offset })

    tracks = [
      ...tracks,
      ...items.map(({ name, id, artists }) => ({
        name,
        id,
        artists: artists.map((a) => a.name).reduce((p, a) => `${p}, ${a}`),
      })),
    ]
    if (next != null) await getNext(new URL(next).searchParams.get('offset'))
  }
  await getNext(0)
  return tracks
}
