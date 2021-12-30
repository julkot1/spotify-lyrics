import { useSession } from 'next-auth/client'
import React, { FunctionComponent, useCallback } from 'react'
import {
  usePlaybackState,
  WebPlaybackSDK,
} from 'react-spotify-web-playback-sdk'
import Test from './Test'
type Props = {}
const HistoryList: FunctionComponent<Props> = ({}) => {
  const [session, loading] = useSession()
  console.log(session?.user)
  const getOAuthToken = useCallback(
    (callback) =>
      callback(
        'BQAd25Dyxh1Y0rRr-j9jHamMOyu2OD1-BIBZZ1xwMJgESlcFikQAZGqtroeIfIQ96Socwokob6rFz4t9lYMCIjlrGNU9nL0Qi6VNASo4KRcx1ZSPS4rfY97DBh6UevzHcvS9UchkcN0Kwfewl4v3ynRyDwkBzio'
      ),
    []
  )
  return (
    <>
      {session && (
        <WebPlaybackSDK
          deviceName="testq"
          getOAuthToken={getOAuthToken}
          connectOnInitialized={true}
        >
          <Test />
        </WebPlaybackSDK>
      )}
    </>
  )
}
export default HistoryList
