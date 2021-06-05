import { signIn, useSession } from 'next-auth/client'
import Main from '@components/Main'
import Layout from '@components/Layout'
export default function Home() {
  return (
    <Layout>
      <Main />
    </Layout>
  )
}
