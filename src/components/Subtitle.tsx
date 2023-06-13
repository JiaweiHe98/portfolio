import React from 'react';
import { Typography, Box } from '@mui/material';

type SubtitleProps = {
  children: React.ReactNode;
};

const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <Box className="text-center mb-5">
      <Typography variant="h4" className="text-4xl" sx={{ fontWeight: 500 }}>
        {children}
      </Typography>
    </Box>
  );
};

export default Subtitle;
