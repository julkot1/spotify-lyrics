import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Spotify({
      scope:
        'user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming user-library-modify user-library-read',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt(token, _, account) {
      if (account) {
        token.id = account.id
        token.refresh_token = account.refresh_token
        token.accessToken = account.accessToken
      }
      return token
    },
    async session(session, user) {
      session.user = user
      return session
    },
  },
}

export default (req, res) => NextAuth(req, res, options)
