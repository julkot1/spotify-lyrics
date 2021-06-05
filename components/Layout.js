import { signIn, useSession } from 'next-auth/client'
const Layout = ({ children }) => {
  const [session, loading] = useSession()
  if (loading) return null

  return (
    <div>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign In</button>
        </>
      )}
      {session && <>{children}</>}
    </div>
  )
}

export default Layout
