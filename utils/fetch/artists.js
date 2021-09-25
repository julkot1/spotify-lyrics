import axios from 'node_modules/axios/index'

const fetchArtists = async (urls) => {
  const data = []
  for (const url of urls) {
    const result = await axios.get(url)
    data.push(result.data)
  }
  return data
}

export default fetchArtists
