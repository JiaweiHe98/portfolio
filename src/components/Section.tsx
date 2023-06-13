import React from 'react';
import { Box, Container } from '@mui/material';

const sectionStyle = 'py-28  ';

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, children, className }: SectionProps) => {
  return (
    <Box id={id} className={sectionStyle + className}>
      <Container>{children}</Container>
    </Box>
  );
};

export default Section;
