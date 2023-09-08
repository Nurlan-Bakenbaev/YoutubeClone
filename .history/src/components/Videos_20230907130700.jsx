import React from 'react'
import { Stack,Box } from '@mui/material'
const Videos = ({videos}) => {

  console.log(videos)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start'gap={2}>
      {videos.map((item,idx)=>(
        <Box>
          {item.id.videoI}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos