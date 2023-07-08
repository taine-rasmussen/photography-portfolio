import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface RowBoxProps {
  children: ReactNode;
};

const RowBox = (props: RowBoxProps) => {
  const { children } = props;
  return (
    <Box
      sx={{
        flexDirection: 'row',
        display: 'flex',
      }}
    >
      {children}
    </Box>
  )
};

export default RowBox;