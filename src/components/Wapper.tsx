import React from 'react';
import Headers from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

type WapperProps = {
  children: React.ReactNode;
};

const Wapper = ({ children }: WapperProps) => {
  return (
    <Box className="min-w-min">
      <Headers />
      {children}
      <Footer />
    </Box>
  );
};

export default Wapper;
