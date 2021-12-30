import NextAuth, { NextAuthOptions } from 'next-auth'
import Providers from 'next-auth/providers'

const scopes = [
  'playlist-modify-private',
  'playlist-read-private',
  'playlist-modify-public',
  'user-read-private',
  'user-read-email',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-library-modify',
  'user-library-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-top-read',
  'app-remote-control',
  'streaming',
  'user-follow-read',
]
const options: NextAuthOptions = {
  providers: [
    Providers.Spotify({
      scope: scopes.reduce((p, e) => p + ' ' + e),
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
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
