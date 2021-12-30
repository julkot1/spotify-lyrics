import Container from '@components/Container'
import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import ProfileTitle from '../ProfileTitle'
import HistoryList from './HistoryList'
import NavigationButton from './NavigationButton'
type Props = {}
const StyledNavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
const PageNumber = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`
const History: FunctionComponent<Props> = ({}) => {
  const [page, setPage] = useState<number>(1)
  return (
    <Container loading={false}>
      <ProfileTitle>My history</ProfileTitle>
      <StyledNavWrapper>
        <NavigationButton page={page} setPage={setPage} type="prev" />
        <PageNumber>{page}</PageNumber>
        <NavigationButton page={page} setPage={setPage} type="next" />
      </StyledNavWrapper>
      <HistoryList />
    </Container>
  )
}
export default History
