import useSpotify from '@utils/useSpotify'
import { getSession } from 'next-auth/client'
import { Profile } from '../../../utils/types/profile'
import { Image } from '../../../utils/types/image'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    try {
      const spotify = await useSpotify(session.user['refresh_token'])
      const {
        body: {
          country,
          id,
          images,
          email,
          external_urls,
          display_name,
          product,
        },
      } = await spotify.getMe()
      const profile: Profile = {
        country,
        id,
        images: [...(images as Image[])],
        isPremium: product == 'premium',
        name: display_name,
        url: external_urls.spotify,
        email,
      }
      res.send(profile)
    } catch (err) {
      res.send(null)
    }
  } else res.send(null)
}
