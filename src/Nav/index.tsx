import RowBox from '../Wrappers/RowBox'
import { Box, Typography } from '@mui/material'

const index = () => {
  return (
    <RowBox spaceBetween>
      <Box>
        <Typography
          variant='h1'
        >
          Taine Rasmussen
        </Typography>
      </Box>
      <Box>
        list
      </Box>
    </RowBox>
  )
}

export default index
