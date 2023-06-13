import React from 'react';
import { Typography, Box } from '@mui/material';
import Params from '../data/Params';

type SubtextProps = {
  children: React.ReactNode;
};

const Subtext = ({ children }: SubtextProps) => {
  return (
    <Box className="text-center mb-10">
      <Typography
        className="text-xl"
        variant="body1"
        sx={{ fontWeight: 300, color: Params.subtextColor }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Subtext;
