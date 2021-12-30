import { Profile } from '@utils/types/profile'
import React, { FunctionComponent } from 'react'
import Container from '../Container'
import InfoField from './InfoField'
import styled from 'styled-components'
import ProfileTitle from './ProfileTitle'

type Props = {
  profile: Profile
  loading: boolean
}
const StyledImage = styled.img`
  width: 15%;
  height: auto;
  border-radius: 50%;
`
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`
const InfoContainer = styled.div`
  padding: 0 3%;
`
const Overview: FunctionComponent<Props> = ({ profile, loading }) => {
  return (
    <Container loading={loading}>
      {profile && (
        <StyledWrapper>
          <StyledImage alt="profile image" src={profile.images[0].url} />
          <InfoContainer>
            <InfoField name="e-mail">{profile.email}</InfoField>
            <InfoField name="name">{profile.name}</InfoField>
            <InfoField name="id">{profile.id}</InfoField>
          </InfoContainer>
        </StyledWrapper>
      )}
    </Container>
  )
}
export default Overview
