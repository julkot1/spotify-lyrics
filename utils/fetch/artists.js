import axios from 'node_modules/axios/index'
import { useState } from 'react'

const fetchArtists = (ids, session) => {
  const [artists, setArtists] = useState([])
  const getArtists = async () => {
    if (session) {
      const data = []
      for (const id of ids) {
        const result = await axios.get(id)
        data.push(result.data)
      }
      setArtists(data)
    }
  }
  return [artists, getArtists]
}

export default fetchArtists
