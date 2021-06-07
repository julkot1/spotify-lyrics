import React from 'react'
import styled from 'styled-components'
import RecommendedItem from './RecommendedItem'
const StyledList = styled.li`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const RecommendedList = ({ tracks }) => {
  return (
    <StyledContainer>
      <StyledList>
        {tracks.map((track) => (
          <RecommendedItem track={track} />
        ))}
      </StyledList>
    </StyledContainer>
  )
}

export default RecommendedList
