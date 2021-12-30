import SpotifyWebApi from 'spotify-web-api-node'

const useSpotify = async (r_token) => {
  const spotify: SpotifyWebApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
  })
  spotify.setRefreshToken(r_token)
  const data = await spotify.refreshAccessToken()
  spotify.setAccessToken(data.body['access_token'])
  return spotify
}
export default useSpotify
