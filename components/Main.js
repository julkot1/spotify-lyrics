import Search from '@components/Search'
import TracksList from './TracksList'
import styled from 'styled-components'
const StyledMain = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  color: #00897b;
  font-size: 6em;
`
const Main = () => {
  return (
    <StyledMain>
      <Title>Lyricsify</Title>
      <Search />
      <TracksList />
    </StyledMain>
  )
}

export default Main
