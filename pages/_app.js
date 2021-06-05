import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body{
    background-color: #363636;
    color: white
  }
  *{
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
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
