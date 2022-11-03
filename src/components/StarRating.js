import React from 'react'
import {Rating} from "@material-ui/lab"
import { Box } from '@material-ui/core'

const StarRating = ({stars}) => {
  return (
    <div>
      <Box component="fieldset" borderColor="transparent">
        <Rating name='read-only' readOnly value={stars}/>
      </Box>
    </div>
  )
}

export default StarRating
