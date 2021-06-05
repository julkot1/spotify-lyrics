import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Spotify({
      scope:
        'user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)
