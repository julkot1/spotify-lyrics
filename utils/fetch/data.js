import axios from 'node_modules/axios/index'
import { useState } from 'react'
import fetchArtists from './artists'

const fetchData = (id, session) => {
  const [data, setData] = useState(null)
  const getData = async () => {
    if (session) {
      setData(null)
      const track = (await axios.get(`${process.env.API_URL}track/${id}`)).data
      const artists = await fetchArtists(track.artists_url)
      const album = (await axios.get(track.album_url)).data
      const recommendations = (await axios.get(track.recommendations_url)).data
      setData({ track, artists, album, recommendations })
    }
  }
  return [data, getData]
}
export default fetchData
