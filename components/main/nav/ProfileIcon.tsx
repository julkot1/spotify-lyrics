import React, { FunctionComponent, useState } from 'react'
import { useEffect } from 'react'
import axios from 'node_modules/axios/index'
import { Profile } from '../../../utils/types/profile'
import styled from 'styled-components'
import { green } from '../../../utils/style/colors'
import Link from 'next/link'
type Props = {}

type StyledProps = {
  premium: boolean
}
const StyledImage = styled.img<StyledProps>`
  border-radius: 50%;
  width: 40px;
  border: ${(props) => (props.premium ? ` 3px solid ${green}` : 'none')};
  cursor: pointer;
`
const LoadingDiv = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${green};
  opacity: 0.5;
`
const ProfileIcon: FunctionComponent<Props> = ({}) => {
  const [profile, setProfile] = useState<Profile | null>(null)
  useEffect(() => {
    ;(async () => {
      setProfile(await (await axios.get(`${process.env.API_URL}profile`)).data)
    })()
  })
  return (
    <>
      {profile ? (
        <Link href="/profile">
          <StyledImage
            alt={profile.id}
            src={profile.images[0].url}
            premium={profile.isPremium}
            title="profile"
          />
        </Link>
      ) : (
        <LoadingDiv />
      )}
    </>
  )
}
export default ProfileIcon
