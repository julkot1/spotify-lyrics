import { Provider } from 'next-auth/client'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    background-color: #363636;
    color: white;
    padding: 0;
    margin: 0;
  }
  *{
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h3{
    font-size: 2rem;
  }

`
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
