import { getProviders, signIn, useSession, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { green } from '@utils/style/colors'
import Button from '@components/buttons/Button'
const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const SignIn = (props: any) => {
  const [session, loading] = useSession()
  const router = useRouter()
  if (session) router.push('/')

  return (
    <Layout>
      <StyledLogin>
        {Object.values(props.providers).map((provider: any) => (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
      </StyledLogin>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
export default SignIn
