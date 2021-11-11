import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
  const [session, loading] = useSession()
  if (loading) return null
  const router = useRouter()
  if (!session && router.pathname != '/auth/signin') router.push('/auth/signin')
  return (
    <div>
      {(session || router.pathname == '/auth/signin') && <>{children}</>}
    </div>
  )
}

export default Layout
