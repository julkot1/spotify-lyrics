import React, { FunctionComponent } from 'react'
import { usePlaybackState } from 'react-spotify-web-playback-sdk'
type Props = {}
const Test: FunctionComponent<Props> = ({}) => {
  const playbackState = usePlaybackState()
  if (playbackState == null || playbackState?.track_window == null) return null

  return (
    <>
      {playbackState.track_window.current_track.name}
      {' by '}
      {playbackState.track_window.current_track.artists
        .map((e) => e.name)
        .reduce((p, c) => p + ', ' + c)}
    </>
  )
}
export default Test
