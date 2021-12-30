import axios from 'axios'
import React, { FunctionComponent } from 'react'
import Button from './Button'
type Props = {
  tracks: string[]
  playlistName: string
}

const CreatePlaylist: FunctionComponent<Props> = ({ tracks, playlistName }) => {
  return (
    <Button
      onClick={() => {
        ;(async () =>
          await axios.post(
            `${process.env.API_URL}profile/playlist?name=${playlistName}`,
            { tracks }
          ))()
      }}
    >
      Create Playlist
    </Button>
  )
}
export default CreatePlaylist
