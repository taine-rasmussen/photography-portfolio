import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface RowBoxProps {
  children: ReactNode;
  spaceBetween?: boolean;
  fullWidth?: boolean; 
};

const RowBox = (props: RowBoxProps) => {
  const { 
    children,
    fullWidth,
    spaceBetween, 
  } = props;

  return (
    <Box
      sx={{
        flexDirection: 'row',
        display: 'flex',
        justifyContent: spaceBetween ? 'space-between' : 'flex-start',
        width: fullWidth ? '100%' : 'auto'
      }}
    >
      {children}
    </Box>
  )
};

export default RowBox;