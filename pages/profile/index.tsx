import React, { FunctionComponent, useState } from 'react'
import Layout from '../../components/Layout'
import Head from 'next/head'
import axios from 'node_modules/axios/index'
import { Profile as ProfileType } from '@utils/types/profile'
import { useEffect } from 'react'
import Overview from '../../components/profile/Overview'
import styled from 'styled-components'
import TopTracks from '../../components/profile/topTracks/TopTracks'
import History from '@components/profile/history/History'

const StyledWrapper = styled.section`
  width: 100%;
  margin: 5rem 0;
  padding: 0 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Profile: FunctionComponent = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null)
  useEffect(() => {
    ;(async () =>
      setProfile((await axios.get(`${process.env.API_URL}profile`)).data))()
  }, [])

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout>
        <StyledWrapper>
          <Overview loading={!profile} profile={profile} />
          <TopTracks />
          <History />
        </StyledWrapper>
      </Layout>
    </>
  )
}
export default Profile
