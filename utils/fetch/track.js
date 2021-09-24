import axios from 'node_modules/axios/index'
import { useState } from 'react'

const fetchTrack = (tr, id, session) => {
  const [track, setTrack] = useState(tr)
  const getTrack = async () => {
    if (session) {
      setTrack(null)
      const result = await axios.get(`${process.env.API_URL}track/${id}`)
      setTrack(result.data)
    }
  }
  return [track, getTrack]
}
export default fetchTrack
