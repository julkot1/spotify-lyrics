const getTrack = ({ name, uri, id, external_urls, artists, album }) => ({
  name,
  uri,
  id,
  url: external_urls.spotify,
  images: album.images,
  artists: artists.map((a) => a.name).reduce((p, a) => `${p}, ${a}`),
})
export default getTrack
