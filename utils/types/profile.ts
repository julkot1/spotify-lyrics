import { Image } from './image'
export interface Profile {
  country: string
  name: string
  id: string
  images: Image[]
  isPremium: boolean
  url: string
  email: string
}
