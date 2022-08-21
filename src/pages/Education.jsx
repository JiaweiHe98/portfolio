import React from 'react';
import { Box, Typography } from '@mui/material';
import EducationTimeLine from '../components/EducationTimeLine';
import { Container } from '@mui/system';

const Education = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: '20vh', display: 'flex' }}>
        <Box>
          <EducationTimeLine />
        </Box>
        <Box sx={{ width: '30vw' }}>
          <Typography variant="h2" sx={{ minWidth: 400 }}>
            Education
          </Typography>
          <Typography variant="h5">
            In 2019, I earn an opprotunity to participate a 2 + 2 program
            between Wuhan Institue of Technology and Florida Tech. You may
            wondering that why I did not choose Computer Science in the first
            place. I may answer that having experienced more on concrete
            phenomena do help me understand abstract things.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Education;
