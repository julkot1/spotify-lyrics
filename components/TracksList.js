import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const TracksList = () => {
  const router = useRouter()
  const [tracks, setTracks] = useState([])
  const getTracks = async () => {
    const result = await axios.get(process.env.API_URL + 'search', {
      params: { q: router.query.q },
    })
    setTracks(result.data)
  }
  useEffect(getTracks, [router.asPath])
  return (
    <ul>
      {tracks.map((track) => (
        <Link href={`/track/${track.id}`}>
          <li key={track.id}>
            <p>{track.name}</p>
            <p>{track.artists}</p>
            <p>{track.album}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default TracksList
